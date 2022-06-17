import { combineReducers } from "redux";
import { postReducer, postPageCountReducer, commentReducer, commentPageCountReducer } from "./postReducer";

const reducers = combineReducers({
    allPosts: postReducer,
    postPageCounts: postPageCountReducer,
    allComments: commentReducer,
    commentPageCounts: commentPageCountReducer,
})

export default reducers;