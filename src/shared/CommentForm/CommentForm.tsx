import React, {ChangeEvent, FormEvent, useContext, useState} from 'react';
import styles from './commentForm.css';
import {commentContext} from "../context/commentContext";

export const CommentForm = () => {
    const {value, onChange} = useContext(commentContext)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} onChange={handleChange} value={value}/>
            <div className={styles.form_bottom}>
                <span className={styles.controls}>here will be some CONTROLS</span>
                <button type={"submit"} className={styles.btnSubmit}>comment</button>
            </div>
        </form>
    </>
}

