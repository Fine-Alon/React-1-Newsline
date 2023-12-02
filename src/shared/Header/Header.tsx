import React from 'react';
import styles from './header.css';
import {SearchBlock} from './SearchBlock';
import {ThreadTitle} from './ThreadTitle';
import {SortBlock} from './SortBlock';

export const Header = () => {
    return (
        <header className={styles.header}>
            <ThreadTitle/>
            <SortBlock/>
            <SearchBlock />
        </header>
    );
}
