import { ActionTypes } from "../contants/action-types";

export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts,
    }
}

export const setPageCount = (pageCount) => {
    return {
        type: ActionTypes.PAGE_COUNT,
        payload: pageCount,
    }
}