import React from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import {useUserData} from "../../../hooks/useUserData";

export const SearchBlock: React.FC = () => {
    const {data, isLoading} = useUserData()

    return (
        <div className={styles.searchBlock}>
            search block
            <UserBlock userName={data.name} isLoading={isLoading} avatarSrc={data.iconImg}/>
        </div>
    );
}
