import React from "react";
import { LinearProgress, Typography } from "@material-ui/core";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { RouteConfigs } from "routes";
import useStyles from "./landing-styles";

export default function Landing() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h2">Computer Creator App</Typography>
            <Typography>In this app you can configure your own computer and it will be added to the existing computers database</Typography>
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
