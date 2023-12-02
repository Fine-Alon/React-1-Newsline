import React from "react";
import {usePostData} from "../../hooks/usePostsData";

interface IPostContext {
    author?: string
    created?: string
    banner_img?: string
    icon_img?: string
    ups?: string
    url?: string
    title?: string
    id?: string
    subreddit?: string
}

export const postContext = React.createContext<IPostContext[]>([])

export const PostContextProvider = ({children}: { children: React.ReactNode }) => {
    const [posts] = usePostData()

    return <>
        <postContext.Provider value={posts}>
            {children}
        </postContext.Provider>
    </>
}
