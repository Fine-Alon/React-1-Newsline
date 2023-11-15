import React from 'react';
import {TextContent} from './TextContent';
import {Preview} from './Preview';
import {Menu} from './Menu';
import {Controls} from './Controls';
import {NOOP} from "../../../utils/js/noop";

interface ICardProps {
    postId?: string
    onDeletePost?: (postId: string) => void
}

export const Card: React.FC<ICardProps> = ({postId, onDeletePost = NOOP}) => {

    const handelMenuClick = (postId: string) => {
        onDeletePost(postId)
    }

    return <>
        <TextContent/>
        <Preview/>
        <Menu  postId={postId} onDeletePost={handelMenuClick}/>
        <Controls/>
    </>
};
