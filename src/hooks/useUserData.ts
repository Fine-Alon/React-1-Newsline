import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store";

interface IUserData {
    name?: string
    iconImg?: string
}

export const useUserData = () => {
    const [data, setData] = useState<IUserData>({})
    const token = useSelector<RootState,string|undefined>(state => state.token)

    useEffect(() => {
        if (token !== "" && token !== "undefined") {
            axios
                .get('https://oauth.reddit.com/api/v1/me.json', {
                    headers: {Authorization: `bearer ${token}`}
                })
                .then((res) => {
                    const userData = res.data
                    setData({iconImg: userData.icon_img, name: userData.name})
                })
                .catch(console.log)
        }
    }, [token])

    return [data]
}