import {useEffect, useState} from "react";
import axios from "axios";
import {useToken} from "./useToken";

interface IUseCommentsData {
    postId: string | undefined
}

export const usePostsComments = (postId: IUseCommentsData) => {
    const [data, setData] = useState([])
    const token = useToken()

    useEffect(() => {
        if (token && token.length > 0) {
            axios.get(`https://oauth.reddit.com/comments/${postId}?sr_detail=true`,{
                headers:{Authorization:`Bearer ${token}`},
            })
                .then((res: any) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log("Error fetching comments:", error)
                })
        }

    }, [token]);

    return data
}
