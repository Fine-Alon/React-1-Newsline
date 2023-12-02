import {useEffect, useState} from "react";
import axios from "axios";
import {useToken} from "./useToken";

export const usePostsComments = (postId:string, subreddit:string) => {
    const [data, setData] = useState([])
    const token = useToken()

    useEffect(() => {
        if (!token || token.length <= 0) return
        axios.get(`https://reddit.com/r/${subreddit}comments/${postId}`)
            .then((res: any) => {
                console.log(res)
            })
            .catch((error) => {
                console.log("Error fetching comments:", error)
            })

    }, [token]);

    return data
}
