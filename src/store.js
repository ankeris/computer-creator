import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { computerPartsReducer } from "modules/computer/computerPartsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null;

export default createStore(
    combineReducers({
        computerParts: computerPartsReducer,
    }),
    composeEnhancers()
);
