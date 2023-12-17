import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reduser";
import {CommentForm} from "../CommentForm";
import {updateCommentAC} from "../../../store/me/actions";


interface ICommentFormProps {
    id?: string
    name?: string
    postId?: string
    comments?: Object[]
}

export const CommentFormContainer = ({name, id, postId}: ICommentFormProps) => {

    const value = useSelector<RootState, string>(state => state.commentText)
    const dispatch = useDispatch()

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateCommentAC(event.target.value))
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <CommentForm handleChange={handleChange} name={name} postId={postId} handleSubmitt={handleSubmit} value={value}/>
    )
}


