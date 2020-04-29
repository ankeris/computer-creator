import React from "react";
import { useForm } from "react-hook-form";
import { Grid, LinearProgress, Button } from "@material-ui/core";
import { INPUT_TYPE_TEXT, INPUT_TYPE_SELECT } from "providers/constants";
import CAFormInput from "components/CAFormInput/CAFormInput";
import { useCreateComputer } from "providers/hooks";

export default function CarConfigurationForm({ cpus, gpus, motherboards, rams, storages }) {
    const { handleSubmit, control, errors } = useForm();
    const { isCreatingComputer, triggerCreateComputer } = useCreateComputer();

    const onSubmit = ({ computerName, ...rest }) => {
        triggerCreateComputer({ computerName, parts: rest });
    };

    const inputs = [
        { id: "computerName", control, name: "computerName", label: "Computer Name", type: INPUT_TYPE_TEXT, value: "No name", render: true },
        { id: "cpu", control, name: "cpu", label: "Central Processing Unit", type: INPUT_TYPE_SELECT, values: cpus, render: true },
        { id: "gpu", control, name: "gpu", label: "Graphical Card", type: INPUT_TYPE_SELECT, values: gpus, render: true },
        { id: "motherboard", control, name: "motherboard", label: "Motherboard", type: INPUT_TYPE_SELECT, values: motherboards, render: true },
        { id: "ram", control, name: "ram", label: "RAM", type: INPUT_TYPE_SELECT, values: rams, render: true },
        { id: "storage", control, name: "storage", label: "Storage", type: INPUT_TYPE_SELECT, values: storages, render: true },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                {inputs.map(
                    ({ render, ...rest }) =>
                        render && (
                            <Grid item xs={12} key={rest.id}>
                                <CAFormInput {...rest} />
                            </Grid>
                        )
                )}
                <Grid item xs={12}>
                    <Button fullWidth type="submit" variant="contained" color="primary" size="large">
                        Submit
                    </Button>
                </Grid>
                {isCreatingComputer && (
                    <Grid item xs={12}>
                        <LinearProgress />
                    </Grid>
                )}
                <Grid item xs={12}>
                    {JSON.stringify(errors).substring(0, 100)}
                </Grid>
            </Grid>
        </form>
    );
}
