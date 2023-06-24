import React from 'react';
import styles from '../../card.css';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.
      </a>
    </h2>
  );
}
