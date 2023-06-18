import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar}
              src='https://cdn.dribbble.com/userupload/7871949/file/original-26aa3025abe2b1a39bd21a3ba639b590.jpg?compress=1&crop=163x122-1437x1078&resize=400x300&vertical=center'
            />
            <a className={styles.username}>Константин Кодов</a>
          </div>
          <span className={styles.createdAt}>8 hours ago</span>
        </div>
        <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, voluptas? Iste.</h2>
      </div>
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src="https://cdn.dribbble.com/userupload/7783548/file/original-98c414a952d010a8c6c4035dc54fc00d.png?compress=1&resize=400x300&vertical=center"
          alt="preview"
        />
      </div>
      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
          </svg>
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
            </svg>
          </button>
          <span className={styles.karmaValue}>345</span>
          <button className={styles.down}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
