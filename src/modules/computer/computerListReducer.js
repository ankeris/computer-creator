const initialState = {
    computers: [],
    isFetchingComputers: false,
    isCreatingComputer: false,
    postComputerError: "",
};

// action types
export const GET_ALL_COMPUTERS_REQUEST = "GET_ALL_COMPUTERS_REQUEST";
export const GET_ALL_COMPUTERS_RESPONSE = "GET_ALL_COMPUTERS_RESPONSE";
export const POST_COMPUTER_REQUEST = "POST_COMPUTER_REQUEST";
export const POST_COMPUTER_RESPONSE = "POST_COMPUTER_RESPONSE";

// actions
export const getAllComputersRequest = (payload) => ({ type: GET_ALL_COMPUTERS_REQUEST, payload });
export const getAllComputersResponse = (payload) => ({ type: GET_ALL_COMPUTERS_RESPONSE, payload });
export const postComputerRequest = (payload) => ({ type: POST_COMPUTER_REQUEST, payload });
export const postComputerResponse = (payload) => ({ type: POST_COMPUTER_RESPONSE, payload });

export function computerListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_COMPUTERS_REQUEST:
            return {
                ...state,
                isFetchingComputers: true,
            };
        case GET_ALL_COMPUTERS_RESPONSE:
            return payload.error
                ? {
                      ...state,
                      errorMessage: `There was a problem while fetching computers: ${payload.error}`,
                      isFetchingComputers: false,
                  }
                : {
                      ...state,
                      isFetchingComputers: false,
                      computers: payload.computers,
                  };
        case POST_COMPUTER_REQUEST:
            return {
                ...state,
                isCreatingComputer: true,
            };
        case POST_COMPUTER_RESPONSE:
            return payload.error
                ? {
                      ...state,
                      postComputerError: `There was a problem creating computer ${payload.error}`,
                      isCreatingComputer: false,
                  }
                : {
                      ...state,
                      postComputerError: "",
                      isCreatingComputer: false,
                  };
        default:
            return state;
    }
}
