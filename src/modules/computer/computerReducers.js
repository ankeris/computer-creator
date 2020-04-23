const initialState = {
    posts: null,
    currentPost: null,
    isLoading: false,
    errorMessage: "",
};

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

export const valuesActions = {
    // getPosts: (payload: IGetPostsParams) => ({ type: VALUES_ACTION_TYPES.GET_POSTS, payload }),
};

export function computerReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                errorMessage: "",
                isLoading: true,
            };
        default:
            return state;
    }
}
