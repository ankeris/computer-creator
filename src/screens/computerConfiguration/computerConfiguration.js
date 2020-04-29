import React, { useEffect } from "react";
import useStyles from "./computerConfiguration-styles";
import CarConfigurationForm from "./Form/carConfigurationForm";
import { useFetchParts } from "providers/hooks";

export default function App() {
    const classes = useStyles();
    const { cpus, gpus, motherboards, rams, storages, isLoading } = useFetchParts();

    return isLoading ? <h1>loading...</h1> : <CarConfigurationForm cpus={cpus} gpus={gpus} motherboards={motherboards} rams={rams} storages={storages} />;
}
