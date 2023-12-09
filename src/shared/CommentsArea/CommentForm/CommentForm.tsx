import React, {ChangeEvent, FormEvent, forwardRef, useEffect} from 'react';
import styles from './commentForm.css';

interface ICommentFormProps {
    refTextarea: React.RefObject<HTMLTextAreaElement>
    id?: string
    name?: string
    postId?: string
    comments?: Object[]
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
    value: string
    handleSubmit: (event: FormEvent) => void
}

export const CommentForm = forwardRef<HTMLTextAreaElement, ICommentFormProps>(
    ({
         refTextarea, value, handleChange,
         name, id, handleSubmit, postId
     }, ref) => {

        // Use useEffect to focus the textarea when the component mounts
        useEffect(() => {
            refTextarea?.current?.focus();
        }, [refTextarea]);
        return <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <textarea placeholder={`${name ? name : 'Whoever u are'}, leave your comment`}
                          ref={refTextarea} className={styles.input} onChange={handleChange} value={value}/>
                <div className={styles.form_bottom}>
                    <span className={styles.controls}>here will be some CONTROLS</span>
                    <button type={"submit"} className={styles.btnSubmit}>comment</button>
                </div>
            </form>
        </>
    }
)

