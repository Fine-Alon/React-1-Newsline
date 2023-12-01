import React from 'react';
import styles from '../../card.css';
import {utcToLeftTime} from "../../../../../utils/js/dateTransformator";

interface IMetaDataProps {
    author?: string
    url?: string
    icon_img?: string
    created?: string
}

export function MetaData({author, url, icon_img, created}: IMetaDataProps) {
    return (
        <div className={styles.metaData}>
            <div className={styles.userLink}>
                <img className={styles.avatar}
                     src={icon_img ? icon_img
                         : 'https://cdn.dribbble.com/userupload/7871949/file/original-26aa3025abe2b1a39bd21a3ba639b590.jpg?compress=1&crop=163x122-1437x1078&resize=400x300&vertical=center'
                     }
                     alt='avatar'
                />
                <a href={url ? url : '#user-url'} className={styles.username}>{author ? author : 'Rick Griens'}</a>
            </div>
            <span className={styles.createdAt}>
               <span
                   className={styles.publishedLabel}>published</span>{created
                ? utcToLeftTime(created) + ' hours ago'
                : ' 8 hours ago'}
            </span>
        </div>
    );
}
