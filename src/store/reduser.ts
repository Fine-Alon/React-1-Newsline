import {Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAC,
    MeRequestErrorAC,
    MeRequestSuccessAC,
    SET_TOKEN,
    SetTokenAC,
    UPDATE_COMMENT,
    UpdateCommentAC
} from "./me/actions";
import {meReducer, MeState} from "./me/reduser";
import {postsReducer, PostsState} from "./posts/reduser";
import {
    SET_POSTS,
    SET_POSTS_AFTER,
    SET_POSTS_ERROR,
    SetPostsAC,
    SetPostsAfterAC,
    SetPostsErrorAC
} from "./posts/actions";


export type RootState = {
    commentText: string
    token: string
    me: MeState
    posts: PostsState

}

export const initialState: RootState = {
    commentText: 'hello SkillBox!',
    token: '',
    me: {
        isLoading: false,
        error: '',
        data: {}
    },
    posts: {
        posts: [],
        after: '',
        postsError: '',
    }
}

export type MyAction = MeRequestAC | MeRequestErrorAC | SetPostsAfterAC
    | MeRequestSuccessAC | UpdateCommentAC | SetTokenAC | SetPostsAC | SetPostsErrorAC

export const rootReduser: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case SET_POSTS:
        case SET_POSTS_AFTER:
        case SET_POSTS_ERROR:
            return {
                ...state,
                posts: postsReducer(state.posts, action)
            }

        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state
    }
}

