import React, { Fragment } from "react";
import { ListItem, ListItemIcon, ListItemText, Checkbox, Divider } from "@material-ui/core";
import useStyles from "./ca-computer-preview-styles";

export default function CAComputerPreview({ id, handleToggle, checked, computerName, parts }) {
    const classes = useStyles();
    return (
        <Fragment key={id}>
            <ListItem key={id} role={undefined} dense button onClick={handleToggle(id)}>
                <ListItemIcon>
                    <Checkbox edge="start" checked={checked.indexOf(id) !== -1} tabIndex={-1} disableRipple />
                </ListItemIcon>
                <ListItemText
                    classes={{
                        secondary: classes.secondary,
                    }}
                    primary={computerName}
                    secondary={Object.keys(parts).map((key) => (
                        <span key={key}>{parts[key].value}</span>
                    ))}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Fragment>
    );
}
