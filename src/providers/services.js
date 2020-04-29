import axios from "axios";
const SERVER_URL = "http://localhost:3001";
const CPU_ENDPOINT = "/CPU";
const GPU_ENDPOINT = "/GPU";
const MBOARD_ENDPOINT = "/MBOARD";
const RAM_ENDPOINT = "/RAM";
const STORAGE_ENDPOINT = "/STORAGE";

export const getCpus = () => axios.get(SERVER_URL + CPU_ENDPOINT).then(({ data }) => data);
export const getGpus = () => axios.get(SERVER_URL + GPU_ENDPOINT).then(({ data }) => data);
export const getMotherboards = () => axios.get(SERVER_URL + MBOARD_ENDPOINT).then(({ data }) => data);
export const getRams = () => axios.get(SERVER_URL + RAM_ENDPOINT).then(({ data }) => data);
export const getStorages = () => axios.get(SERVER_URL + STORAGE_ENDPOINT).then(({ data }) => data);
