import React, {useEffect, useState} from "react";
import axios from "axios";
import {useToken} from "./useToken";

export const usePostData = () => {
    const [posts, setPosts] = useState([])
    const token = useToken()

    useEffect(() => {
        if (token && token.length > 0 || token !== undefined) {

            axios
                .get("https://oauth.reddit.com/best.json?sr_detail=true", {
                    headers: {Authorization: `bearer ${token}`}
                })
                .then((res) => {
                    const bestPostArr = res.data.data.children.map((data: { data: any }) => ({
                        id: data.data.id,
                        title: data.data.title,
                        author: data.data.author,
                        created: data.data.created,
                        banner_img: data.data.sr_detail.banner_img,
                        icon_img: data.data.sr_detail.icon_img,
                        ups: data.data.ups,
                        url: data.data.url,
                    }))
                    setPosts(bestPostArr)
                })
                .catch(console.log)
        }
    }, [])

    return [posts]
}