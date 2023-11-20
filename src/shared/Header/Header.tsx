import React from 'react';
import styles from './header.css';
import {SearchBlock} from './SearchBlock';
import {ThreadTitle} from './ThreadTitle';
import {SortBlock} from './SortBlock';

interface IHeaderProps {
    token: string
}

export const Header: React.FC<IHeaderProps> = ({token}) => {
    return (
        <header className={styles.header}>
            <ThreadTitle/>
            <SortBlock/>
            <SearchBlock token={token}/>
        </header>
    );
}
