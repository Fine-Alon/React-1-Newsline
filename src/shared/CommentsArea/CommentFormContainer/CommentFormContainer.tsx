import React, {ChangeEvent, FormEvent, forwardRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reduser";
import {CommentForm} from "../CommentForm/CommentForm";
import {updateCommentAC} from "../../../store/me/actions";


interface ICommentFormProps {
    refTextarea: React.RefObject<HTMLTextAreaElement>
    id?: string
    name?: string
    postId?: string
    comments?: Object[]
}

export const CommentFormContainer = forwardRef<HTMLTextAreaElement, ICommentFormProps>(
    ({refTextarea, name, id, postId}, ref) => {
        /*  const store = useStore<RootState>()
          const value = store.getState().commentText*/
        const value = useSelector<RootState, string>(state => state.commentText)
        const dispatch = useDispatch()

        const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateCommentAC(event.target.value))
        }

        const handleSubmit = (event: FormEvent) => {
            event.preventDefault()
        }
        // Use useEffect to focus the textarea when the component mounts
        useEffect(() => {
            refTextarea?.current?.focus();
        }, [refTextarea]);
        return <CommentForm handleChange={handleChange} handleSubmit={handleSubmit} value={value} refTextarea={refTextarea}/>
    }
)

