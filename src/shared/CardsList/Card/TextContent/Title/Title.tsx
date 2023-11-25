import React, {useState} from 'react';
import styles from '../../card.css';
import {Post} from "../../../../Post";

interface ITitleProps {
    title?: string
}

export function Title({title}: ITitleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handelClick = () => {
        console.log('clicked')
        setIsModalOpen(!isModalOpen)
    }

    return (
        <h2 className={styles.title} onClick={handelClick}>
            <button className={styles.postLink}>
                {title ? title
                    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.'}
            </button>
            {isModalOpen && <Post/>}
        </h2>
    );
}
