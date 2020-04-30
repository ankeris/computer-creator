import React, { Fragment } from "react";
import { List } from "@material-ui/core";
import { useComputersList } from "providers/hooks";
import { LinearProgress, Typography } from "@material-ui/core";
import CAComputerPreview from "components/CAComputerPreview/CAComputerPreview";

export default function ComputerList() {
    const { computers, isFetchingComputers } = useComputersList();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    return (
        <Fragment>
            <Typography variant="h4" gutterBottom>
                Computers list
            </Typography>
            {isFetchingComputers && <LinearProgress />}
            {!isFetchingComputers && computers.length && (
                <List>
                    {computers.map((props) => (
                        <CAComputerPreview key={props.id} {...props} handleToggle={handleToggle} checked={checked}></CAComputerPreview>
                    ))}
                </List>
            )}
        </Fragment>
    );
}
