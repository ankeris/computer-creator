import React from "react";
import Grid from "@material-ui/core/Grid";
import { INPUT_TYPE_TEXT, INPUT_TYPE_SELECT } from "providers/constants";
import CAFormInput from "components/CAFormInput";

export default function CarConfigurationForm({ cpus, gpus, motherboards, rams, storages }) {
    console.log(cpus);

    const inputs = [
        { id: "computerName", name: "computerName", label: "Computer Name", type: INPUT_TYPE_TEXT, value: "No name", render: true },
        { id: "cpu", name: "cpu", label: "Central Processing Unit", type: INPUT_TYPE_SELECT, values: ["No name", "No name"], render: true },
        { id: "gpu", name: "gpu", label: "Graphical Card", type: INPUT_TYPE_SELECT, values: ["No name", "No name"], render: true },
        { id: "motherboard", name: "motherboard", label: "Motherboard", type: INPUT_TYPE_SELECT, values: ["No name", "No name"], render: true },
        { id: "ram", name: "ram", label: "RAM", type: INPUT_TYPE_SELECT, values: ["No name", "No name"], render: true },
        { id: "storage", name: "storage", label: "Storage", type: INPUT_TYPE_SELECT, values: ["No name", "No name"], render: true },
    ];
    return (
        <Grid container spacing={3}>
            {inputs.map(
                ({ render, ...rest }) =>
                    render && (
                        <Grid item xs={12} key={rest.id}>
                            <CAFormInput {...rest} />
                        </Grid>
                    )
            )}
        </Grid>
    );
}
