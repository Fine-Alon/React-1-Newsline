import {createContext} from "react";

type PostsCommentsContext = {
    value: string
}

export const postsCommentsContext = createContext<PostsCommentsContext>
({value: ""})

