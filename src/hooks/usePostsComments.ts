import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

type IUseCommentsData = string | undefined


export const usePostsComments = (postId: IUseCommentsData) => {
    const [data, setData] = useState([])
    const token = useContext(tokenContext)

    useEffect(() => {
        if (token && token.length > 0 && token !== "undefined") {
            axios.get(`https://oauth.reddit.com/comments/${postId}?sr_detail=true`, {
                headers: {Authorization: `Bearer ${token}`},
            })
                .then((res: any) => {
                    const comment = res.data[1].data.children[4].data.body || ''
                    console.log(comment)
                    setData(comment)
                })
                .catch((error) => {
                    console.log("Error fetching comments:", error)
                })
        }

    }, [token]);

    return data
}
