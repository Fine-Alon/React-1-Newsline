import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export const usePostData = () => {
    const [posts, setPosts] = useState([])
    const token = useSelector<RootState, string | undefined>(state => state.token)

    useEffect(() => {

        if (token && token.length > 0 || token !== undefined) {

            axios
                .get("https://oauth.reddit.com/best.json?sr_detail=true", {
                    headers: {Authorization: `bearer ${token}`}
                })
                .then((res) => {
                    // console.log(res.data.data.children[1].data.subreddit)
                    const bestPostArr = res.data.data.children.map((data: { data: any }) => ({
                        id: data.data.id,
                        subreddit: data.data.subreddit,
                        title: data.data.title,
                        author: data.data.author,
                        created: data.data.created_utc * 1000,
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