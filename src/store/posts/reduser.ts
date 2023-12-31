import {Reducer} from "redux";
import {SetPostsAC, SetPostsAfterAC, SetPostsErrorAC} from "./actions";
import {initialState} from "../reduser";
import {IPostContext, SET_POSTS, SET_POSTS_AFTER, SET_POSTS_ERROR} from "./actions";

export type PostsState = {
    posts: IPostContext[]
    after: string
    postsError: string
}

type PostsActions = SetPostsAC | SetPostsAfterAC | SetPostsErrorAC

export const postsReducer: Reducer<PostsState, PostsActions> = (state = initialState.posts, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case SET_POSTS_AFTER:
            return {
                ...state,
                after: action.payload
            }
        case SET_POSTS_ERROR:
            return {
                ...state,
                postsError: action.payload
            }
        default:
            return state
    }
}