import React, {useRef, useState} from 'react';
import styles from '../../card.css';
import {Post} from "../../../../Post";

interface ITitleProps {
    title?: string
}

export function Title({title}: ITitleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const onOpen = () => {
        console.log('modal is Open')
        setIsModalOpen(true)
    }
    const onClose = () => {
        console.log('modal is Close')
        setIsModalOpen(false)
    }
    return (
        <h2 className={styles.title} onClick={onOpen}>
            <button className={styles.postLink}>
                {title
                    ? title
                    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.'}
            </button>
            {isModalOpen && <Post onClose={onClose}/>}
        </h2>
    );
}
