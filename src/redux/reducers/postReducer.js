import { ActionTypes } from "../contants/action-types";

const initialPostState = {
    posts: [],
}

const initialPageCountState = {
    pageCount: 1
}
export const postReducer = (state = initialPostState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POSTS:
            return {...state, posts: payload};
        default: 
            return state;
    }
}

export const pageCountReducer = (state = initialPageCountState, {type, payload}) => {
    switch (type) {
        case ActionTypes.PAGE_COUNT:
            return {...state, pageCount: payload};
        default: 
            return state;
    }
}