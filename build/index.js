'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resolvePromiseMiddleware = undefined;

var _isPromise = require('redux-promise-middleware/dist/isPromise');

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvePromiseMiddleware = exports.resolvePromiseMiddleware = function resolvePromiseMiddleware() {
    return function (next) {
        return function (action) {
            var result = next(action);
            if ((0, _isPromise2.default)(action.payload)) {
                return result.then(function (resp) {
                    return resp.value;
                });
            }
            return result;
        };
    };
};

exports.default = { resolvePromiseMiddleware: resolvePromiseMiddleware };