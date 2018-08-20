import isPromise from 'redux-promise-middleware/dist/isPromise';

export const resolvePromiseMiddleware = () => next => action => {
    const result = next(action);
    if (isPromise(action.payload)) {
        return result.then(resp => resp.value);
    }
    return result;
};

export default { resolvePromiseMiddleware };