import React from 'react';
import styles from '../card.css';
import { MetaData } from './MetaData';
import { Title } from './Title';

interface IMetaDataProps {
    id?:string
    postId?: string
    subreddit?: string | undefined
    author?: string
    title?: string
    url?: string
    icon_img?: string
    created?: string
}
export function TextContent({author,id, subreddit, postId,title,url,icon_img,created}:IMetaDataProps) {
  return (
    <div className={styles.textContent}>
      <MetaData author={author} url={url} icon_img={icon_img} created={created}/>
      <Title postId={postId} subreddit={subreddit} title={title} id={id}/>
    </div>
  );
}
