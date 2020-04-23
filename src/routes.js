import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ComputerConfiguration = lazy(() => import("screens/computerConfiguration/computerConfiguration"));
const ComputerList = lazy(() => import("screens/computerList/computerList"));

export const RouteComponents = {
    COMP_CONFIGURATIOn: {
        component: ComputerConfiguration,
        exact: true,
        path: "/configuration",
    },
    COMP_LIST: {
        component: ComputerList,
        exact: true,
        path: "/list",
    },
};

// eslint-disable-next-line react/prop-types
const ComponentsToRender = ({ isServiceUnavailable }) => {
    if (isServiceUnavailable) return <div>Service Unavailable</div>;
    return (
        <Switch>
            {Object.keys(RouteComponents).map((key) => {
                const { component, path, ...rest } = RouteComponents[key];
                const ComponentToRender = component;
                return <Route key={key} render={(props) => <ComponentToRender {...props} />} path={path} {...rest} />;
            })}
        </Switch>
    );
};

const routes = (props) => (
    <Router>
        <Suspense fallback={<div>Loading... </div>}>
            <ComponentsToRender {...props} />
        </Suspense>
    </Router>
);

export default routes;
