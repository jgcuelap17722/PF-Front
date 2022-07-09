const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const thunk = require("redux-thunk");
const reducer = require("./reducer");

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;