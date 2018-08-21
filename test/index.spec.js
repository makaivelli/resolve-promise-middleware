import { resolvePromiseMiddleware } from '../src/index'

const action = {type: 'ACTION', payload: Promise.resolve('value')};
const fakeReduxPromiseMiddleware = jest.fn(() => Promise.resolve({
    action: action,
    value: 'value'
}));

test('jest should work with resolvePromiseMiddleware', () => {
    const middleware = resolvePromiseMiddleware()(fakeReduxPromiseMiddleware)(action);
    return expect(middleware).resolves.toBe('value')
});