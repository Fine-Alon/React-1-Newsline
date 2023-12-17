import React, {ChangeEvent, FormEvent, forwardRef, useEffect, useRef} from 'react';
import styles from './commentForm.css';
import {SubmitHandler, useForm} from "react-hook-form";
import {updateCommentAC} from "../../../store/me/actions";
import {useDispatch} from "react-redux";

interface ICommentFormProps {
    // refTextarea: React.RefObject<HTMLTextAreaElement>
    id?: string
    name?: string
    postId?: string
    comments?: Object[]
    handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
    value: string
    handleSubmitt?: (event: FormEvent) => void
}

type Inputs = {
    comment: string
}

export const CommentForm = (props: ICommentFormProps) => {
    const {
        value,
        handleChange, name,
        id,
        handleSubmitt,
        postId
    } = props

    const dispatch = useDispatch()
    const refTextarea = useRef<HTMLTextAreaElement>(null)

    const {
        register,
        handleSubmit,
        watch,
    } = useForm<Inputs>({defaultValues: {comment: value}})
    const onSubmit: SubmitHandler<Inputs> = (data) => alert('Form was sent')


    dispatch(updateCommentAC(watch('comment')))

    // Use useEffect to focus the textarea when the component mounts
    useEffect(() => {
        refTextarea.current?.focus();
    }, []);

    return <>
        {/* <form className={styles.form} onSubmit={handleSubmitt}>
                <textarea placeholder={`${name ? name : 'Whoever u are'}, leave your comment`}
                          ref={refTextarea}
                          className={styles.input}
                          onChange={handleChange}
                          value={value}/>
                <div className={styles.form_bottom}>
                    <span className={styles.controls}>here will be some CONTROLS</span>
                    <button type={"submit"} className={styles.btnSubmit}>comment</button>
                </div>
            </form>*/}

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            {/* include validation with required or other standard HTML validation rules */}

            <textarea placeholder={`${name ? name : 'Whoever u are'}, leave your comment`}
                      className={styles.input}
                      {...register("comment", {required: false})}
                // it is possible to uncomment <<ref={refTextarea}>> below to see focus on textarea when post window is open
                      ref={refTextarea}
            />

            <div className={styles.form_bottom}>
                <span className={styles.controls}>here will be some CONTROLS</span>
                <button type={"submit"} className={styles.btnSubmit}>comment</button>
            </div>
        </form>
    </>
}


