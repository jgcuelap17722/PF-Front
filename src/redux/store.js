import petsReducer from "./petsReducer";
import foundationsReducer from "./foundationsReducer";
const { createStore, applyMiddleware, combineReducers } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const {default: thunk} = require("redux-thunk");
const {default: reducer} = require("./reducer"); 

// console.log(firstReducer);

const reducersCombinados = combineReducers({
  reducer,
  petsReducer,
  foundationsReducer
})

const store = createStore(reducersCombinados, composeWithDevTools(applyMiddleware(thunk)))

export default store;

