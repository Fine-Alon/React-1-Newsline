import React, {useEffect, useRef} from 'react';
import styles from './post.css';
import {createPortal} from 'react-dom';
import {PostContent} from './PostContent';
import {usePostsComments} from "../../hooks/usePostsComments";

interface IPostProps {
    onClose?: () => void;
    handelMenuClick?: (postId: string) => void;
    postId?: string | undefined
    subreddit?: string | undefined
    id?: string;
}

export const Post = ({onClose, subreddit, id, handelMenuClick, postId}: IPostProps) => {
    const ref = useRef<HTMLDivElement>(null);
    if (!postId || !subreddit) return null

    useEffect(() => {
        const handelClick = (event: MouseEvent) => {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose?.();
            }
        };

        document.addEventListener('click', handelClick);
        return () => {
            document.removeEventListener('click', handelClick);
        };
    }, [onClose]);

    const node = document.querySelector('#modal_root');
    if (!node) {
        console.error("Element with ID 'modal_root' not found.");
        return null;
    }

    return createPortal(
        <div className={styles.modal} ref={ref}>
            <PostContent/>
            {/*<CommentsArea id={id} postId={postId} handelMenuClick={handelMenuClick}/>*/}
            <CommentList postId={id}/>
        </div>,
        node
    );
};


interface ICommentListId {
    postId: string
}

export function CommentList({postId}: ICommentListId) {
    const [data] = usePostsComments(postId)

    if (!data) return null

    return (
        <div>
            API Reddit suspect be here
        </div>
    )
}
