import { createStore,combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { cityReducer } from "./City/reducer";
import { countryReducer } from "./Country/reducer";


const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

  // const rootReducer = combineReducers({
  //   city: cityReducer,
  //   country: countryReducer,
  // });
//export const store = createStore(rootReducer, enhancer);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
