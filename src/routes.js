import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "screens/landing/landing";

const ComputerConfiguration = lazy(() => import("screens/computerConfiguration/computerConfiguration"));
const ComputerList = lazy(() => import("screens/computerList/computerList"));

export const RouteConfigs = {
    COMP_CONFIGURATION: {
        component: ComputerConfiguration,
        exact: true,
        path: "/configuration",
    },
    COMP_LIST: {
        component: ComputerList,
        exact: true,
        path: "/list",
    },
    LANDING: {
        component: LandingPage,
        exact: true,
        path: "/",
    },
};

const ComponentsToRender = ({ isServiceUnavailable }) => {
    if (isServiceUnavailable) return <div>Service Unavailable</div>;
    return (
        <Switch>
            {Object.keys(RouteConfigs).map((key) => {
                const { component, path, ...rest } = RouteConfigs[key];
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
