import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllParts, getAllPartsResponse } from "modules/computer/computerPartsReducer";
import { getCpus, getGpus, getMotherboards, getRams, getStorages } from "providers/services";

export const useFetchParts = () => {
    const cpus = useSelector(({ computerParts }) => computerParts.cpus);
    const gpus = useSelector(({ computerParts }) => computerParts.gpus);
    const motherboards = useSelector(({ computerParts }) => computerParts.motherboards);
    const rams = useSelector(({ computerParts }) => computerParts.rams);
    const storages = useSelector(({ computerParts }) => computerParts.storages);
    const isLoading = useSelector(({ computerParts }) => computerParts.isLoading);
    const dispatch = useDispatch();

    const triggerFetch = async () => {
        try {
            dispatch(getAllParts());
            const [cpus, gpus, motherboards, rams, storages] = await Promise.all([getCpus(), getGpus(), getMotherboards(), getRams(), getStorages()]);
            dispatch(getAllPartsResponse({ cpus, gpus, motherboards, rams, storages }));
        } catch (error) {
            dispatch(getAllPartsResponse({ error }));
        }
    };

    useEffect(() => {
        triggerFetch();
    }, []);

    return { cpus, gpus, motherboards, rams, storages, triggerFetch, isLoading };
};
