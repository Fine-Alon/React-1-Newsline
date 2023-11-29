import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import {createPortal} from "react-dom";
import {PostContent} from "./PostContent";
import {CommentsArea} from "../CommentsArea";

interface IPostProps {
    onClose?: () => void
    postId?: string
    handelMenuClick?: (postId: string) => void
}

export const Post = ({onClose,handelMenuClick,postId}: IPostProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handelClick = (event: MouseEvent) => {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose?.()
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
        <CommentsArea postId={postId} handelMenuClick={handelMenuClick}/>
    </div>, node)

}
