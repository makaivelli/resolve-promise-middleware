import { resolvePromiseMiddleware } from '../src/index'

const action = {type: 'ACTION', payload: 'payload'};
const asyncAction = {type: 'ASYNC_ACTION', payload: Promise.resolve('value')};

const fakeReduxPromiseMiddleware = jest.fn((action) => {
    let result;
    if (typeof action.payload.then === 'function') {
        result = {
            action: action,
            value: action.payload
        };
    }
    else {
        result = action;
    }
    return Promise.resolve(result);
});

describe('resolvePromiseMiddleware', () => {
    test('should return the action if payload is not a promise', () => {
        const middleware = resolvePromiseMiddleware()(fakeReduxPromiseMiddleware)(action);
        return expect(middleware).resolves.toBe(action)
    });

    test('should return the value if payload is a promise', () => {
        const middleware = resolvePromiseMiddleware()(fakeReduxPromiseMiddleware)(asyncAction);
        return expect(middleware).resolves.toBe('value')
    });
});