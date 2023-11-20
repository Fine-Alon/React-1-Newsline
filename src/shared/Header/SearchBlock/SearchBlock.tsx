import React, {useEffect, useState} from 'react';
import styles from './searchblock.css';
import {UserBlock} from "./UserBlock";
import axios from "axios";


interface ISearchBlockProps {
    token: string
}

interface IUserData {
    name?: string
    iconImg?: string
}

export const SearchBlock: React.FC<ISearchBlockProps> = ({token}) => {
    const [data, setData] = useState<IUserData>({})

    useEffect(() => {
        if (token !== "" && token !== "undefined") {
            axios
                .get('https://oauth.reddit.com/api/v1/me.json', {
                    headers: {Authorization: `bearer ${token}`}
                })
                .then((res) => {
                    const userData = res.data
                    console.log(res)
                    console.log(userData.icon_img)
                    setData({iconImg: userData.icon_img, name: userData.name})
                })
                .catch(console.log)
        }
    }, [token])

    return (
        <div className={styles.searchBlock}>
            search block
            <UserBlock userName={data.name} avatarSrc={data.iconImg}/>
        </div>
    );
}
