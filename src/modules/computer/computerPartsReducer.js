const initialState = {
    cpus: [],
    gpus: [],
    motherboards: [],
    rams: [],
    storages: [],
    isLoading: false,
};

// action types
export const GET_CPUS_REQUEST = "GET_CPUS";
export const GET_GPUS_REQUEST = "GET_GPUS";
export const GET_MOTHERBOARDS_REQUEST = "GET_MOTHERBOARDS";
export const GET_RAMS_REQUEST = "GET_RAMS";
export const GET_STORAGES_REQUEST = "GET_STORAGES";
export const GET_ALL_PARTS_REQUEST = "GET_ALL_PARTS_REQUEST";
export const GET_ALL_PARTS_RESPONSE = "GET_ALL_PARTS_RESPONSE";

// actions
export const getAllParts = () => ({ type: GET_ALL_PARTS_REQUEST });
export const getAllPartsResponse = (payload) => ({ type: GET_ALL_PARTS_RESPONSE, payload });

export function computerPartsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_PARTS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_ALL_PARTS_RESPONSE:
            console.log(payload);
            return payload.error
                ? {
                      ...state,
                      errorMessage: `There was a problem while fetching parts: ${payload.error}`,
                      isLoading: false,
                  }
                : {
                      ...state,
                      isLoading: false,
                      cpus: payload.cpus,
                      gpus: payload.gpus,
                      motherboards: payload.motherboards,
                      rams: payload.rams,
                      storages: payload.storages,
                  };
        default:
            return state;
    }
}
