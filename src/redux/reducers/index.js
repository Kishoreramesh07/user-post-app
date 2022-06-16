import { combineReducers } from "redux";
import { postReducer, pageCountReducer } from "./postReducer";

const reducers = combineReducers({
    allPosts: postReducer,
    pageCounts: pageCountReducer,
})

export default reducers;