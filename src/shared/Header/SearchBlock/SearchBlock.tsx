import React from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {useUserData} from "../../../hooks/useUserData";

export const SearchBlock: React.FC= () => {
    const [data] = useUserData()

    return (
        <div className={styles.searchBlock}>
            search block
            <UserBlock userName={data.name} avatarSrc={data.iconImg}/>
        </div>
    );
}
