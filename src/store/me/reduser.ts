import {Reducer} from "redux";
import {
    IUserData,
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAC,
    MeRequestErrorAC,
    MeRequestSuccessAC
} from "./actions";
import {initialState} from "../reduser";

export type MeState = {
    isLoading: boolean
    error: string
    data: IUserData
}

type MeActions = MeRequestAC | MeRequestErrorAC | MeRequestSuccessAC

export const meReducer: Reducer<MeState, MeActions> = (state = initialState.me, action) => {
    switch (action.type) {
        case ME_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case ME_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case ME_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state
    }
}