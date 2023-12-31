import {ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {MyAction, RootState} from "../reduser";
import axios from "axios";

// --------------------------    SET_POSTS   ---------------------------------------//
export const SET_POSTS = 'SET_POSTS'

export type SetPostsAC = {
    type: typeof SET_POSTS
    payload: IPostContext[]
}

export interface IPostContext {
    author?: string
    created?: string
    banner_img?: string
    icon_img?: string
    ups?: string
    url?: string
    title?: string
    id?: string
    subreddit?: string
}

export const setPostsAC: ActionCreator<SetPostsAC> = (posts: IPostContext[]) => ({
    type: SET_POSTS,
    payload: posts
})

export const setPost = (nextAfter: string): ThunkAction<void, RootState, unknown, MyAction> =>
    async (dispatch, getState) => {
        const token = getState().token
        const prevPosts: IPostContext[] = getState().posts.posts

        if (token && token.length > 0 || token !== undefined) {
            try {
                const {data: {data: {children, after}}} = await
                    axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
                        headers: {Authorization: `bearer ${token}`},
                        params: {limit: 10, after: nextAfter}
                    })
                const bestPostArr = children.map((data: { data: any }) => ({
                    id: data.data.id,
                    subreddit: data.data.subreddit,
                    title: data.data.title,
                    author: data.data.author,
                    created: data.data.created_utc * 1000,
                    banner_img: data.data.sr_detail.banner_img,
                    icon_img: data.data.sr_detail.icon_img,
                    ups: data.data.ups,
                    url: data.data.url,
                }))
                dispatch(setPostsErrorAC(''))
                dispatch(setPostsAC(prevPosts.concat(...bestPostArr)))
                dispatch(setPostsAfterAC(after))

            } catch (error: any) {
                dispatch(setPostsErrorAC(error.message))
            }
        }
    }
// --------------    SET_POSTS_AFTER attribute that helps observe end of listing    ---------//
export const SET_POSTS_AFTER = 'SET_POSTS_AFTER'

export type SetPostsAfterAC = {
    type: typeof SET_POSTS_AFTER
    payload: string
}
export const setPostsAfterAC: ActionCreator<SetPostsAfterAC> = (after: string) => ({
    type: SET_POSTS_AFTER,
    payload: after
})
// --------------------------    SET_POSTS_ERROR   ---------------------------------------//
export const SET_POSTS_ERROR = 'SET_POSTS_ERROR'

export type SetPostsErrorAC = {
    type: typeof SET_POSTS_ERROR
    payload: string
}

export const setPostsErrorAC: ActionCreator<SetPostsErrorAC> = (error: string) => ({
    type: SET_POSTS_ERROR,
    payload: error
})