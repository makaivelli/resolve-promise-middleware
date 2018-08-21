import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import { resolvePromiseMiddleware } from '../src/index'

const action = {type: 'ACTION', payload: 'payload'};
const asyncAction = {type: 'ASYNC_ACTION', payload: Promise.resolve('value')};

describe('resolvePromiseMiddleware', () => {
    test('should return the action if payload is not a promise', () => {
        const store = createStore(() => ({}), applyMiddleware(resolvePromiseMiddleware, promiseMiddleware()));
        return expect(store.dispatch(action)).toEqual(action);
    });

    test('should return the value if payload is a promise', () => {
        const store = createStore(() => ({}), applyMiddleware(resolvePromiseMiddleware, promiseMiddleware()));
        return expect(store.dispatch(asyncAction)).resolves.toBe('value');
    });
});
