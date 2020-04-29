import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { INPUT_TYPE_SELECT, INPUT_TYPE_TEXT } from "providers/constants";

const CAFormInput = ({ id, name, label, type, value = 1, values = [10, 20, 30], onChange = () => {} }) => {
    switch (type) {
        case INPUT_TYPE_SELECT:
            return (
                <FormControl fullWidth>
                    <InputLabel id={id}>Age</InputLabel>
                    <Select labelId={id} id={id} value={value} onChange={onChange}>
                        {values.map((x) => (
                            <MenuItem key={x} value={x}>
                                {x}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
        case INPUT_TYPE_TEXT:
            return (
                <FormControl fullWidth>
                    <TextField required id={id} name={name} label={label} />
                </FormControl>
            );
        default:
            return "No component";
    }
};

export default CAFormInput;
