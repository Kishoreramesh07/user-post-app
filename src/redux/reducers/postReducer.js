import { ActionTypes } from "../contants/action-types";

const initialPostState = {
    posts: [{
        id: ""
    }],
}

const initialPostPageCountState = {
    postPageCount: 1
}
export const postReducer = (state = initialPostState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POSTS:
            return {...state, posts: payload};
        default: 
            return state;
    }
}

export const postPageCountReducer = (state = initialPostPageCountState, {type, payload}) => {
    switch (type) {
        case ActionTypes.POST_PAGE_COUNT:
            return {...state, postPageCount: payload};
        default: 
            return state;
    }
}

const initialCommentState = {
    comments: [{
        id: ""
    }],
}

const initialCommentPageCountState = {
    commentPageCount: 1
}

export const commentReducer = (state = initialCommentState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_COMMENTS:
            return {...state, comments: payload};
        default: 
            return state;
    }
}

export const commentPageCountReducer = (state = initialCommentPageCountState, {type, payload}) => {
    switch (type) {
        case ActionTypes.COMMENT_PAGE_COUNT:
            return {...state, commentPageCount: payload};
        default: 
            return state;
    }
}