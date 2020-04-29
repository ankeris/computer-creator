import React from "react";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { RouteConfigs } from "routes";
import useStyles from "./landing-styles";

export default function Landing() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <h1>Computer Creator App</h1>
            <Link to={RouteConfigs.COMP_CONFIGURATION.path} color="primary">
                <Button fullWidth variant="contained" size="large">
                    Create new computer
                </Button>
            </Link>

            <Link to={RouteConfigs.COMP_LIST.path} color="primary">
                <Button fullWidth variant="contained" size="large" color="default">
                    Existing computers list
                </Button>
            </Link>
        </Box>
    );
}
