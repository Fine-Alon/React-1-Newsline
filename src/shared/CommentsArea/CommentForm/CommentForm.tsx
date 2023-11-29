import React, {ChangeEvent, FormEvent, forwardRef, useContext, useEffect} from 'react';
import styles from './commentForm.css';
import {commentContext} from "../../context/commentContext";

interface ICommentFormProps {
    refTextarea: React.RefObject<HTMLTextAreaElement>
}

interface CommentFormRef {
    focus: () => void;
}

export const CommentForm = forwardRef<CommentFormRef, ICommentFormProps>(
    ({refTextarea}, ref) => {
        const {value, onChange} = useContext(commentContext)

        const handleSubmit = (event: FormEvent) => {
            event.preventDefault()
        }
        const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
            onChange(event.target.value)
        }

        // Use useEffect to focus the textarea when the component mounts
        useEffect(() => {
            refTextarea?.current?.focus();
        }, [refTextarea]);
        return <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea ref={refTextarea} className={styles.input} onChange={handleChange} value={value}/>
                <div className={styles.form_bottom}>
                    <span className={styles.controls}>here will be some CONTROLS</span>
                    <button type={"submit"} className={styles.btnSubmit}>comment</button>
                </div>
            </form>
        </>
    }
)

