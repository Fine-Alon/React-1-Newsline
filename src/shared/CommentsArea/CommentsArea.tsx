import React from 'react';
import styles from './commentsArea.css';
import {Comments} from "../Comments";
import {GenericList} from "../GenericList";
import { CommentBtn, Hide, Report, Save, Share} from "../CardsList/Card/Menu/MenuLinks";
import {generateId} from "../../utils/js/generateRandomIndex";
import {CommentForm} from "./CommentForm";

interface ICommentsArea {
    postId?: string
    handelMenuClick?: (postId: string) => void
}

export const CommentsArea: React.FC<ICommentsArea> = ({postId, handelMenuClick}) => {

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
        <CommentForm/>
        <Comments/>
    </>
}
