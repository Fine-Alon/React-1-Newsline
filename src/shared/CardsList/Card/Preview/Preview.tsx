import React from 'react';
import styles from '../card.css';

interface IPreviewProps {
    banner_img?: string
}

export function Preview({banner_img}: IPreviewProps) {
    return (
        <div className={styles.preview}>
            <img
                className={styles.previewImg}
                src={banner_img ? banner_img
                    : "https://cdn.dribbble.com/userupload/7783548/file/original-98c414a952d010a8c6c4035dc54fc00d.png?compress=1&resize=400x300&vertical=center"
                }
                alt="preview"
            />
        </div>
    );
}
