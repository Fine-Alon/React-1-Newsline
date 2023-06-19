import React from 'react';
import styles from './metadata.css';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar}
          src='https://cdn.dribbble.com/userupload/7871949/file/original-26aa3025abe2b1a39bd21a3ba639b590.jpg?compress=1&crop=163x122-1437x1078&resize=400x300&vertical=center'
        />
        <a href="#user-url" className={styles.username}>Константин Кодов</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликованно</span>
        8 hours ago
      </span>
    </div>
  );
}
