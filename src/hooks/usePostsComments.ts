import {useEffect, useState} from "react";
import axios from "axios";
import {useToken} from "./useToken";

export const usePostsComments = (postId: string) => {
    const [data, setData] = useState([])
    const token = useToken()

    useEffect(() => {
        if (!token || token.length <= 0 || token === undefined) return
        axios.get(`https://oauth.reddit.com/comments/${postId}.json`, {
            headers: {Authorization: `Bearer ${token}`},
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log("Error fetching comments:", error)
            })

    }, [postId, token]);

    console.log(data)
    console.log("res")
    return data
}
