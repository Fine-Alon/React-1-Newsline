import React, {useEffect, useRef, useState} from 'react';
import styles from './commentsArea.css';
import {Comments} from "../Comments";
import {GenericList} from "../GenericList";
import {CommentBtn, Hide, Report, Save, Share} from "../CardsList/Card/Menu/MenuLinks";
import {generateId, generateRandomString} from "../../utils/js/generateRandomIndex";
import {Comment, usePostsComments} from "../../hooks/usePostsComments";
import {CommentFormContainer} from "./CommentFormContainer/CommentFormContainer";

interface ICommentsArea {
    postId?: string
    id: string | undefined
    handelMenuClick?: (postId: string) => void
    comments?: Object[]
}

export const CommentsArea: React.FC<ICommentsArea> = ({postId, id, handelMenuClick}) => {
    const [commentsData, setCommentsData] = useState<Comment[]>([])
    const data = usePostsComments(postId)
    useEffect(() => {
        setCommentsData(data);
    }, [data]); // Only re-run when data changes
    if (!data) return null

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
        <CommentFormContainer id={id} postId={postId} />
        {commentsData.map((topLevelComments, index) => {
            const uniqueKey = generateRandomString()
            return (
                <Comments key={uniqueKey} id={id} commentBody={topLevelComments.body}
                          postId={postId} name={topLevelComments.author}
                          innerComments={topLevelComments.replies}/>)
        })}
    </>
}

