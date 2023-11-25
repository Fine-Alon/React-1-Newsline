import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import {createPortal} from "react-dom";
import {Title} from "../CardsList/Card/TextContent/Title";

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
        <h2>Here will be post, Here will be post title, Here will be post</h2>

        <div className={styles.content} >
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
        </div>
    </div>, node)

}
