import React from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import { Provider } from "react-redux";
import MobileWidget from "components/MobileWidget/mobileWidget";
import store from "./store";

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <MobileWidget>
                <Routes />
            </MobileWidget>
        </Provider>
    </React.Fragment>,
    document.getElementById("root")
);
