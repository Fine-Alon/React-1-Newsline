import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reduser";
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
// --------------------------    ME_REQUEST_ASYNC   ---------------------------------------//
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