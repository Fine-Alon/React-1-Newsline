import React from 'react';
import styles from './userblock.css';
import {EColors, Text} from "../../../Text";
import {Icon} from "../../../Icon";

interface IUserBlock {
    avatarSrc?: string
    userName?: string
}

export const UserBlock: React.FC<IUserBlock> = ({avatarSrc, userName}) => {
    return <>
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
           className={styles.userBox}>
            <div className={styles.avatarBox}>
                {avatarSrc
                    ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
                    : <Icon name={'AnonSvg'} height={50} width={50}/>}
            </div>
            <div className={styles.username} style={{paddingRight: 12}}>
                <Text size={20} color={userName ? EColors.black : EColors.grey99}>{userName || 'Anonymous'}</Text>
            </div>
        </a>
    </>
}
