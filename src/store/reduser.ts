import {Reducer} from "redux";
import {
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAC,
    MeRequestErrorAC,
    MeRequestSuccessAC, SET_TOKEN, SetTokenAC, UPDATE_COMMENT, UpdateCommentAC
} from "./me/actions";
import {meReducer, MeState} from "./me/reduser";


export type RootState = {
    commentText: string
    token: string
    me: MeState
}

export const initialState: RootState = {
    commentText: 'hello SkillBox!',
    token: '',
    me: {
        isLoading: false,
        error: '',
        data: {}
    }
}

export type MyAction = MeRequestAC | MeRequestErrorAC
    | MeRequestSuccessAC | UpdateCommentAC | SetTokenAC

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

