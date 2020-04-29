import React, { Fragment, useEffect } from "react";
import CarConfigurationForm from "./Form/carConfigurationForm";
import { useFetchParts, useCreateComputer } from "providers/hooks";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function App() {
    const { cpus, gpus, motherboards, rams, storages, isLoading, errorMessage } = useFetchParts();

    return (
        <Fragment>
            <h1>Create new computer</h1>
            {isLoading && <LinearProgress />}
            {!isLoading && !errorMessage && <CarConfigurationForm cpus={cpus} gpus={gpus} motherboards={motherboards} rams={rams} storages={storages} />}
            {errorMessage && <h2>{errorMessage}</h2>}
        </Fragment>
    );
}
