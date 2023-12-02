import React, {ChangeEvent, FormEvent, forwardRef, useContext, useEffect, useState} from 'react';
import styles from './commentForm.css';
import {commentContext} from "../../context/commentContext";
import {useToken} from "../../../hooks/useToken";
import axios from "axios";

interface ICommentFormProps {
    refTextarea: React.RefObject<HTMLTextAreaElement>
    id?: string
    postId?: string
    comments?: Object[]
}

export const CommentForm = forwardRef<HTMLTextAreaElement, ICommentFormProps>(
    ({refTextarea, id, postId}, ref) => {
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

