import React from 'react';
import styles from '../card.css';
import { MetaData } from './MetaData';
import { Title } from './Title';

interface IMetaDataProps {
    id?:string
    postId?: string
    author?: string
    title?: string
    url?: string
    icon_img?: string
    created?: string
}
export function TextContent({author,id,title,url,icon_img,created}:IMetaDataProps) {
  return (
    <div className={styles.textContent}>
      <MetaData author={author} url={url} icon_img={icon_img} created={created}/>
      <Title title={title} id={id}/>
    </div>
  );
}
