import React, {useRef, useState} from 'react';
import styles from '../../card.css';
import {Post} from "../../../../Post";

interface ITitleProps {
    title?: string
}

export function Title({title}: ITitleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <h2 className={styles.title} onClick={() => {setIsModalOpen(true)}}>
            <button className={styles.postLink}>
                {title
                    ? title
                    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.'}
            </button>
            {isModalOpen && <Post onClose={() => {setIsModalOpen(false)}}/>}
        </h2>
    );
}
