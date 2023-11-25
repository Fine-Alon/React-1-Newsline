import React from 'react';
import styles from './post.css';
import {createPortal} from "react-dom";
import {Title} from "../CardsList/Card/TextContent/Title";

interface IPostProps {
}

const PostContent = () => {
    return <div className={styles.modal}>
        <h2>Here will be post</h2>

        <div className={styles.content}>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
            <p>Here will be post</p>
        </div>
    </div>
}
export const Post = (props: IPostProps) => {
    const node = document.querySelector('#modal_root');
    if (!node) {
        console.error("Element with ID 'modal_root' not found.");
        return null;
    }
    return createPortal(<PostContent/>, node)

}
