import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

type IUseCommentsData = string | undefined

export interface ICommentData {
    author?: string
    comment?: string
    body?: string
    id?: string
    replies?: IComment
}

interface IComment {
    data: ICommentData[]
    kind: string
}

export const usePostsComments = (postId: IUseCommentsData) => {
    const [data, setData] = useState<ICommentData[]>([])
    const token = useContext(tokenContext)

    useEffect(() => {
        if (token && token.length > 0 && token !== "undefined") {
            axios.get(`https://oauth.reddit.com/comments/${postId}?sr_detail=true`, {
                headers: {Authorization: `Bearer ${token}`},
            })
                .then((res: any) => {
                    const comment = categorizeComments(res.data[1].data.children)
                    console.log(comment)

                    // @ts-ignore
                    setData(comment)
                })
                .catch((error) => {
                    console.log("Error fetching comments:", error)
                })
        }

    }, [token]);

    return data
}
const categorizeComments = (topLevelComments: IComment[]): ICommentData[][] => {
    const categorizedComments: ICommentData[][] = [];
    categorizeRecursive(topLevelComments, categorizedComments, 0);
    return categorizedComments;
}

// [{},{},{},{},{},{},{},{},{},{},{},{},{},{},]    -->  topLevelComments
// {kind: 't1',data:{} } --> comment
// {id,body,author, replies={} }
// replies = {kind:"Listing", {data}}
// replies = {{data}}
const categorizeRecursive = (comments: IComment[], result: ICommentData[][], level: number) => {
    const commentArray: ICommentData[] = [];

    comments.forEach((comment: IComment) => {
        // @ts-ignore
        if (comment.kind === 't1') {
            const data = {
                // @ts-ignore
                id: comment.data.id,
                // @ts-ignore
                body: comment.data.body,
                // @ts-ignore
                author: comment.data.author,
                // @ts-ignore
                replies: comment.data.replies && comment.data.replies.data.children
                    // @ts-ignore
                    ? categorizeRecursive(comment.data.replies.data.children, result, level + 1)
                    : undefined,
            };

            // You should push the comment data into commentArray
            // @ts-ignore
            commentArray.push(data);
        }
    });

    // Ensure the array for the current level exists
    result[level] = result[level] || [];
    // @ts-ignore
    result[level].push(...commentArray);

    // @ts-ignore
    return commentArray;
};

