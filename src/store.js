import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { computerReducer } from "modules/computer/computerReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null;

export default createStore(
    combineReducers({
        form: computerReducer,
    }),
    composeEnhancers()
);
