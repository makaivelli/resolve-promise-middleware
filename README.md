# Return Promise Middleware

## Install
```sh
npm i --save github:makaivelli/return-redux-promise-middleware-value
```

## Usage

### action.js

```js
const asyncAction = () => ({
  type: 'PROMISE',
  payload: new Promise(...)
})
```

### component.js
```js
getDogs().then(dogs => this.dogs = dogs);
```

### service.js
```
getDogs() {
    return store.dispatch(asyncAction)
        .catch(handleError)
```

