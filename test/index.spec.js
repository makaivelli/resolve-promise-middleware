import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import { resolvePromiseMiddleware } from '../src/index'

describe('resolvePromiseMiddleware', () => {
    test('should pass the action to the next middleware', () => {
        const action = {type: 'ACTION', payload: 'payload'};
        const fakeNext = jest.fn();

        resolvePromiseMiddleware()(fakeNext)(action);
        expect(fakeNext).toHaveBeenCalledWith(action);
    });

    describe('applied before promiseMiddleware', () => {
        test('should return the action if payload is not a promise', () => {
            const store = createStore(() => ({}), applyMiddleware(resolvePromiseMiddleware, promiseMiddleware()));
            const action = {type: 'ACTION', payload: 'payload'};

            return expect(store.dispatch(action)).toEqual(action);
        });

        test('should return the value if payload is a promise', () => {
            const store = createStore(() => ({}), applyMiddleware(resolvePromiseMiddleware, promiseMiddleware()));
            const action = {type: 'ASYNC_ACTION', payload: Promise.resolve('value')};

            return expect(store.dispatch(action)).resolves.toBe('value');
        });
    });
});
