import { ActionTypes } from "../contants/action-types";

const initialState = {
    posts: [],
}
export const postReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POSTS:
            return {...state, posts: payload};
        default: 
            return state;
    }
}