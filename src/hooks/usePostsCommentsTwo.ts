import {useContext, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {tokenContext} from "../shared/context/tokenContext";

type IUseCommentsData = string | undefined

/*export interface ICommentData {
    author?: string
    comment?: string
    body?: string
    id?: string
    replies?: IComment
}*/

export interface Comment {
    id: string;
    author: string;
    body: string;
    replies?: Comment[];
}

interface CommentWithKind extends Comment {
    kind: string;
}

/*interface IComment {
    data: ICommentData[]
    kind: string
}*/

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
// @ts-ignore
const shallowComments = (comments: any[]): CommentWithKind[] => {
    let shallow: CommentWithKind[] = [];

    for (const comment of comments) {
        const commentData = comment.data as CommentWithKind;
        const commentKind = comment.kind as CommentWithKind;
        const data = {
            id: commentData.id,
            body: commentData.body,
            author: commentData.author,
            replies: commentData.replies
            /* // @ts-ignore
             replies: commentData.replies && commentData.replies.data.children
                 // @ts-ignore
                 ? categorizeRecursive(commentData.replies.data.children, result, level + 1)
                 : undefined,*/
        };

        // Check if the comment type is 't1' (top-level comment)
        // @ts-ignore
        if (commentData !== "undefined" && commentKind === 't1') {
            shallow.push(data as CommentWithKind);
        }

        // Check if there are replies and they have children

        // @ts-ignore
   /*     if (commentData.replies !== "") {
            // Recursively process nested comments
            // @ts-ignore
            const nestedComments = shallowComments(commentData.replies.data.children)
            console.log(nestedComments)
            shallow = shallow.concat(nestedComments);
        }*/

        return shallow;
    }
}

/*const categorizeComments = (topLevelComments: IComment[]): ICommentData[][] => {
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
};*/

