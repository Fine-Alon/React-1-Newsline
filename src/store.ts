import {ActionCreator, AnyAction, Reducer} from "redux";

const UPDATE_COMMENT = 'UPDATE_COMMENT'
const SET_TOKEN = 'SET_TOKEN'

export type RootState = {
    commentText: string
    token?: string
}

const initialState: RootState = {
    commentText: 'hello SkillBox!',
    token: ''
}

export const rootReduser: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.payload
            }
        case SET_TOKEN:

            return {...state, token: action.payload}
        default:
            return state
    }
}

export const updateCommentCreator: ActionCreator<AnyAction> = (payload: string) => ({
        type: UPDATE_COMMENT,
        payload,
    }
)

export const setTokenCreator: ActionCreator<AnyAction> = (payload: string) => ({
    type: SET_TOKEN, payload,
})
