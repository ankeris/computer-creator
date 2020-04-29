import { createStore, combineReducers } from "redux";
import { computerPartsReducer } from "modules/computer/computerPartsReducer";
import { computerListReducer } from "modules/computer/computerListReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null;

export default createStore(
    combineReducers({
        computerParts: computerPartsReducer,
        computerList: computerListReducer,
    }),
    composeEnhancers()
);
