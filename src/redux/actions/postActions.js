import { ActionTypes } from "../contants/action-types";

export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts,
    }
}

export const selectedPagePosts = (pagePosts) => {
    return {
        type: ActionTypes.SELECTED_PAGE_POSTS,
        payload: pagePosts,
    }
}