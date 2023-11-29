import React, {useRef, useState} from 'react';
import styles from '../../card.css';
import {Post} from "../../../../Post";
import {NOOP} from "../../../../../utils/js/noop";

interface ITitleProps {
    title?: string
    onDeletePost?: (postId: string) => void}

export function Title({title, onDeletePost = NOOP}: ITitleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handelMenuClick = (postId: string) => {
        onDeletePost(postId)
    }
    return (
        <h2 className={styles.title} onClick={() => {
            setIsModalOpen(true)
        }}>
            <button className={styles.postLink}>
                {title
                    ? title
                    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.'}
            </button>
            {isModalOpen && <Post handelMenuClick={handelMenuClick} onClose={() => {
                setIsModalOpen(false)
            }}/>}
        </h2>
    );
}
