import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IUserData {
    name?: string
    iconImg?: string
    data?: any
}

export const useUserData = () => {
    const [data, setData] = useState<IUserData>({})
    const token = useContext(tokenContext)

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

    return [data]
}