import { createStore, applyMiddleware, combineReducers } from "redux";
import { getPdrsReducer } from "./reducers/pdrReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
  getPdrsReducer: getPdrsReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
