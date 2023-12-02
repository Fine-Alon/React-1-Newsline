import React, {useEffect, useRef, useState} from 'react';
import styles from './commentsArea.css';
import {Comments} from "../Comments";
import {GenericList} from "../GenericList";
import {CommentBtn, Hide, Report, Save, Share} from "../CardsList/Card/Menu/MenuLinks";
import {generateId} from "../../utils/js/generateRandomIndex";
import {CommentForm} from "./CommentForm";
import {useToken} from "../../hooks/useToken";
import axios from "axios";

interface ICommentsArea {
    postId?: string
    id: string | undefined
    handelMenuClick?: (postId: string) => void
    comments?: Object[]
}

export const CommentsArea: React.FC<ICommentsArea> = ({postId, id, handelMenuClick}) => {
    const refTextarea = useRef<HTMLTextAreaElement>(null);
    const menuListDesk = [
        {text: <CommentBtn/>, className: styles.mobileHidden},
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
        <CommentForm  id={id} postId={postId} refTextarea={refTextarea}/>
        <Comments id={id} postId={postId}/>
    </>
}

