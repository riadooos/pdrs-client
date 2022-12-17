import { createStore, applyMiddleware, combineReducers } from "redux";
import { getPdrsReducer, addPdrReducer } from "./reducers/pdrReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
  getPdrsReducer: getPdrsReducer,
  addPdrReducer: addPdrReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
