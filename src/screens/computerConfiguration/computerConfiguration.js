import React from "react";
import useStyles from "./computerConfiguration-styles";
import CarConfigurationForm from "./Form/carConfigurationForm";

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CarConfigurationForm></CarConfigurationForm>
        </div>
    );
}
