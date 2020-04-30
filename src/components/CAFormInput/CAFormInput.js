import React from "react";
import { Controller } from "react-hook-form";
import { InputLabel, MenuItem, FormControl, TextField, Select } from "@material-ui/core";
import { INPUT_TYPE_SELECT, INPUT_TYPE_TEXT } from "providers/constants";

const CAFormInput = ({ id, control, name, label, type, value = "", values = [10, 20, 30], onChange = () => {} }) => {
    switch (type) {
        case INPUT_TYPE_SELECT:
            return (
                <FormControl fullWidth variant="outlined">
                    <InputLabel required id={id}>
                        {label}
                    </InputLabel>

                    <Controller
                        as={
                            <Select id={id} label={label} onChange={onChange}>
                                {values.map(({ id, value }) => (
                                    <MenuItem key={id} value={{ id, value }}>
                                        {value}
                                    </MenuItem>
                                ))}
                            </Select>
                        }
                        name={name}
                        rules={{ required: "this is required" }}
                        control={control}
                        defaultValue=""
                    />
                </FormControl>
            );
        case INPUT_TYPE_TEXT:
            return (
                <FormControl fullWidth>
                    <Controller
                        as={<TextField required id={id} name={name} label={label} />}
                        name={name}
                        rules={{ required: "this is required" }}
                        control={control}
                        defaultValue=""
                    />
                </FormControl>
            );
        default:
            return "No component";
    }
};

export default CAFormInput;
