import React from "react";
import useStyles from "./computerList-styles";

export default function ComputerList() {
    const classes = useStyles();

    return <div className={classes.root}>Computer List component</div>;
}
