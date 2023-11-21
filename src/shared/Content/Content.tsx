import React from 'react';
import styles from './content.css';
import {CardsListGeneric} from "../CardsList/CardsListGeneric";
import {CardsList} from "../CardsList";

interface IContentProps {
    children?: React.ReactNode
}

export function Content({children}: IContentProps) {
    return <main className={styles.content}>
        <CardsList/>
        {children}
    </main>
}
