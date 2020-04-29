import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPartsRequest, getAllPartsResponse } from "modules/computer/computerPartsReducer";
import { getAllComputersRequest, getAllComputersResponse } from "modules/computer/computerListReducer";
import { getCpus, getGpus, getMotherboards, getRams, getStorages } from "providers/services";
import { getComputers } from "providers/services";

export const useFetchParts = () => {
    const cpus = useSelector(({ computerParts }) => computerParts.cpus);
    const gpus = useSelector(({ computerParts }) => computerParts.gpus);
    const motherboards = useSelector(({ computerParts }) => computerParts.motherboards);
    const rams = useSelector(({ computerParts }) => computerParts.rams);
    const storages = useSelector(({ computerParts }) => computerParts.storages);
    const isLoading = useSelector(({ computerParts }) => computerParts.isLoading);
    const errorMessage = useSelector(({ computerParts }) => computerParts.errorMessage);
    const dispatch = useDispatch();

    const triggerFetch = useCallback(async () => {
        try {
            dispatch(getAllPartsRequest());
            const [cpus, gpus, motherboards, rams, storages] = await Promise.all([getCpus(), getGpus(), getMotherboards(), getRams(), getStorages()]);
            dispatch(getAllPartsResponse({ cpus, gpus, motherboards, rams, storages }));
        } catch (error) {
            dispatch(getAllPartsResponse({ error }));
        }
    }, [dispatch]);

    useEffect(() => {
        triggerFetch();
    }, [triggerFetch]);

    return { cpus, gpus, motherboards, rams, storages, triggerFetch, isLoading, errorMessage };
};

export const useComputersList = () => {
    const computers = useSelector(({ computerList }) => computerList.computers);
    const isFetchingComputers = useSelector(({ computerList }) => computerList.isFetchingComputers);
    const dispatch = useDispatch();

    const triggerComputerListFetch = useCallback(async () => {
        try {
            dispatch(getAllComputersRequest());
            const data = await getComputers();
            dispatch(getAllComputersResponse({ computers: data }));
        } catch (error) {
            dispatch(getAllComputersResponse({ error }));
        }
    }, [dispatch]);

    useEffect(() => {
        triggerComputerListFetch();
    }, [triggerComputerListFetch]);

    return { computers, isFetchingComputers, triggerComputerListFetch };
};

export const useCreateComputer = () => {
    const computers = useSelector(({ computerList }) => computerList.computers);
    const isFetchingComputers = useSelector(({ computerList }) => computerList.isFetchingComputers);
    const dispatch = useDispatch();

    const triggerComputerListFetch = useCallback(async () => {
        try {
            dispatch(getAllComputersRequest());
            const data = await getComputers();
            dispatch(getAllComputersResponse({ computers: data }));
        } catch (error) {
            dispatch(getAllComputersResponse({ error }));
        }
    }, [dispatch]);

    useEffect(() => {
        triggerComputerListFetch();
    }, [triggerComputerListFetch]);

    return { computers, isFetchingComputers, triggerComputerListFetch };
};
