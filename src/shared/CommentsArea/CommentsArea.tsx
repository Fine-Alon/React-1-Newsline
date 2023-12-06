import React, {useEffect, useRef, useState} from 'react';
import styles from './commentsArea.css';
import {Comments} from "../Comments";
import {GenericList} from "../GenericList";
import {CommentBtn, Hide, Report, Save, Share} from "../CardsList/Card/Menu/MenuLinks";
import {generateId} from "../../utils/js/generateRandomIndex";
import {CommentForm} from "./CommentForm";
import {Comment, usePostsCommentsTwo} from "../../hooks/usePostsCommentsTwo";

interface ICommentsArea {
    postId?: string
    id: string | undefined
    handelMenuClick?: (postId: string) => void
    comments?: Object[]
}

export const CommentsArea: React.FC<ICommentsArea> = ({postId, id, handelMenuClick}) => {
    const [commentsData, setCommentsData] = useState<Comment[]>([])
    const data = usePostsCommentsTwo(postId)
    useEffect(() => {
        console.log('<<Final arr in CommentsArea>> ', data)
        setCommentsData(data);
    }, [data]); // Only re-run when data changes
    if (!data) return null

    const refTextarea = useRef<HTMLTextAreaElement>(null);
    const menuListDesk = [
        {text: <CommentBtn number={commentsData.length}/>, className: styles.mobileHidden},
        {text: <Share/>, className: styles.mobileHidden},
        {text: <Hide/>, onClick: handelMenuClick},
        {text: <Save/>, className: styles.mobileHidden},
        {text: <Report/>, onClick: handelMenuClick},
    ].map(generateId)

    return <>
        <div className={styles.menu}>
            {<GenericList list={menuListDesk.map(item => ({
                ...item, postId: postId,
                onClick: () => item.onClick!(postId as string)
            }))}/>}
        </div>
        <CommentForm id={id} postId={postId} refTextarea={refTextarea}/>
        {commentsData.map((topLevelComments, index) => (

            <Comments id={id}  commentBody={topLevelComments.body}
                      postId={postId} name={topLevelComments.author}
                      innerComments={topLevelComments.replies}/>
        ))}
    </>
}

