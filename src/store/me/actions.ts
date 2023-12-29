import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {MyAction, RootState} from "../reduser";
import axios from "axios";


// --------------------------    ME_REQUEST   ---------------------------------------//
export const ME_REQUEST = 'ME_REQUEST'

export type MeRequestAC = {
    type: typeof ME_REQUEST
}

export const meRequest: ActionCreator<MeRequestAC> = () => ({
    type: ME_REQUEST
})
// --------------------------    ME_REQUEST_SUCCESS   ---------------------------------------//

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'

export interface IUserData {
    name?: string
    iconImg?: string
}

export type MeRequestSuccessAC = {
    type: typeof ME_REQUEST_SUCCESS
    data: IUserData
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAC> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data
})
// --------------------------    ME_REQUEST_ERROR   ---------------------------------------//
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'

export type MeRequestErrorAC = {
    type: typeof ME_REQUEST_ERROR
    error: string
}

export const meRequestError: ActionCreator<MeRequestErrorAC> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error
})
// --------------------------    ME_REQUEST_THUNK   ---------------------------------------//
export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> =>
    (dispatch, getState) => {

        dispatch(meRequest())
        axios
            .get('https://oauth.reddit.com/api/v1/me.json', {
                headers: {Authorization: `bearer ${getState().token}`}
            })
            .then((res) => {
                const userData = res.data
                dispatch(meRequestSuccess({iconImg: userData.icon_img, name: userData.name}))
            })
            .catch(error => {
                console.log(error)
                dispatch(meRequestError(String(error)))
            })
    }
// --------------------------    UPDATE_COMMENT   ---------------------------------------//
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export type UpdateCommentAC = {
    type: typeof UPDATE_COMMENT
    payload: string
}

export const updateCommentAC: ActionCreator<UpdateCommentAC> = (payload: string) => ({
        type: UPDATE_COMMENT,
        payload,
    }
)
// --------------------------    SET_TOKEN   ---------------------------------------//
export const SET_TOKEN = 'SET_TOKEN'

export type SetTokenAC = {
    type: typeof SET_TOKEN
    payload: string
}

export const setTokenAC: ActionCreator<SetTokenAC> = (payload: string) => ({
    type: SET_TOKEN, payload,
})

// --------------------------    SAVE_TOKEN   ---------------------------------------//
export const saveToken = (): ThunkAction<void, RootState, unknown, any> =>
    (dispatch, getState) => {
        const token = window.__token__
        if (token) {
            console.log('token from SAVE_TOKEN from actions')
            dispatch<any>(setTokenAC(token))
        }
    }

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

export const setPost = (): ThunkAction<void, RootState, unknown, MyAction> =>
    async (dispatch, getState) => {
        const token = getState().token

        if (token && token.length > 0 || token !== undefined) {
            try {
                const {data: {data: {children}}} = await
                    axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
                        headers: {Authorization: `bearer ${token}`},
                        params: {limit: 10, count: 3}
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
                dispatch(setPostsAC(bestPostArr))

            } catch (error: any) {
                dispatch(setPostsErrorAC(error.message))
            }
        }
    }
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