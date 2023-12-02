import React from 'react';
import {TextContent} from './TextContent';
import {Preview} from './Preview';
import {Menu} from './Menu';
import {Controls} from './Controls';
import {NOOP} from "../../../utils/js/noop";

interface ICardProps {
    postId?: string
    subreddit?: string | undefined
    onDeletePost?: (postId: string) => void
    author?: string
    created?: string
    banner_img?: string
    icon_img?: string
    ups?: string
    url?: string
    title?: string
    id?: string
}

export const Card: React.FC<ICardProps> = (props) => {
    const {
        postId,
        subreddit,
        onDeletePost = NOOP,
        author, created,
        banner_img, icon_img,
        ups, url,
        title, id
    } = props

    const handelMenuClick = (postId: string) => {
        onDeletePost(postId)
    }

    return <>
        <TextContent created={created} id={id} postId={postId} subreddit={subreddit} author={author} title={title} url={url} icon_img={icon_img}/>
        <Preview banner_img={banner_img} />
        <Menu postId={postId} onDeletePost={handelMenuClick}/>
        <Controls ups={ups}/>
    </>
};
