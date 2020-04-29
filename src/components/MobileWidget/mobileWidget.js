import React from "react";
import useStyles from "./mobile-styles.js";

export default function MobileWidget({ children }) {
    const classes = useStyles();
    return <figure className={classes.container}>{children}</figure>;
}
