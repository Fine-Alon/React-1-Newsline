import {ActionCreator, AnyAction, Reducer} from "redux";

const UPDATE_COMMENT = 'UPDATE_COMMENT'

export type RootState = {
    commentText: string
}

const initialState: RootState = {
    commentText: 'hello SkillBox!'
}

export const rootReduser: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.payload
            }
        default:
            return state
    }
}

export const updateCommentCreator: ActionCreator<AnyAction> = (payload: string) => ({
        type: UPDATE_COMMENT,
        payload,
    }
)
