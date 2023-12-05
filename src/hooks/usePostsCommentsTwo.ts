import {useContext, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {tokenContext} from "../shared/context/tokenContext";

type IUseCommentsData = string | undefined

export interface Comment {
    id: string;
    author: string;
    body: string;
    replies?: Comment[];
}

interface CommentWithKind extends Comment {
    kind: string;
}

export const usePostsCommentsTwo = (postId: IUseCommentsData) => {
    const [data, setData] = useState<Comment[]>([])
    const token = useContext(tokenContext)

    useEffect(() => {
        if (token && token.length > 0 && token !== "undefined") {
            axios.get(`https://oauth.reddit.com/comments/${postId}?sr_detail=true`, {
                headers: {Authorization: `Bearer ${token}`},
            })
                .then((res: AxiosResponse<any>) => {
                    const comment = shallowComments(res.data[1].data.children)
                    console.log('<<Final Arr from hook to post..>> :', data)
                    setData(comment)
                })
                .catch((error) => {
                    console.log("Error fetching comments:", error)
                })
        }

    }, [token]);

    return data
}
const shallowComments = (comments: any[]): Comment[] => {
    let main: Comment[] = [];

    for (const comment of comments) {
        const commentData = comment.data as CommentWithKind;

        const data = {
            id: commentData.id,
            body: commentData.body,
            author: commentData.author,
            replies: []
        };

        // Check if the comment type is 't1'
        if (comment.kind === 't1') {
            main.push(data);

            // Check if there are replies and they have children
            // @ts-ignore
            if (commentData.replies && commentData.replies.data.children.length > 0) {
                // Recursively process nested comments
                // @ts-ignore
                const nestedComments = shallowComments(commentData.replies.data.children);
                // console.log('nestedComments',nestedComments)
                // @ts-ignore
                data.replies = nestedComments;
            }
        }
    }
    return main;
}
