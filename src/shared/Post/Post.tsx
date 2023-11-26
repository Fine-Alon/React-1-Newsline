import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import {createPortal} from "react-dom";
import {PostContent} from "./PostContent";
import {CommentForm} from "../CommentForm";
import {Comments} from "../Comments";

interface IPostProps {
    onClose?: () => void
}

export const Post = (props: IPostProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handelClick = (event: MouseEvent) => {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.()
            }
        }
        document.addEventListener("click", handelClick)
        return () => {
            document.removeEventListener("click", handelClick)
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) {
        console.error("Element with ID 'modal_root' not found.");
        return null;
    }
    return createPortal(<div className={styles.modal} ref={ref}>
        <PostContent/>
        <CommentForm/>
        <Comments/>
    </div>, node)

}
