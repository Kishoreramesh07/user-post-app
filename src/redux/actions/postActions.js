import { ActionTypes } from "../contants/action-types";

export const setPosts = (posts) => {
    return {
        type: ActionTypes.SET_POSTS,
        payload: posts,
    }
}

export const setPostPageCount = (postPageCount) => {
    return {
        type: ActionTypes.POST_PAGE_COUNT,
        payload: postPageCount,
    }
}

export const setComments = (comments) => {
    return {
        type: ActionTypes.SET_COMMENTS,
        payload: comments,
    }
}

export const setCommentPageCount = (commentPageCount) => {
    return {
        type: ActionTypes.COMMENT_PAGE_COUNT,
        payload: commentPageCount,
    }
}