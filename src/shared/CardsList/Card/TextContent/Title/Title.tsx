import React from 'react';
import styles from '../../card.css';

interface ITitleProps {
    title?: string
}

export function Title({title}: ITitleProps) {
    return (
        <h2 className={styles.title}>
            <a href="#post-url" className={styles.postLink}>{title ? title
                : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.'}
            </a>
        </h2>
    );
}
