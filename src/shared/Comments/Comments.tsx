import React, {useRef, useState} from 'react';
import styles from './Comments.css';
import {CommentBtn, Report, Share} from "../CardsList/Card/Menu/MenuLinks";
import {AnonSvg, CommentsSvg, ReportSvg, ShareSvg} from "../icons";
import {Icon} from "../Icon";
import {CommentForm} from "../CommentsArea/CommentForm";

interface ICommentProps {
    userComment?: string
}

export const Comments: React.FC = (props) => {
    const [openCommentDesk, setOpenCommentDesk] = useState(false)

    const refTextarea = useRef<HTMLTextAreaElement>(null)
    const handleClick = () => {
        console.log('Waiting for comment')
        setOpenCommentDesk(!openCommentDesk)
        refTextarea.current?.focus()

    }

    return <>
        <div className={styles.comments_block}>
            <div className={styles.user_info}>
                <a href={'#'} className={styles.user_link}>
                    <Icon name={'AnonSvg'} height={20} width={20}/>
                    <span>name</span>
                </a>
                <span className={styles.timing}>Timing</span>
                <span className={styles.community}>Community</span>
            </div>
            <div className={styles.comment_text}>
                {
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut consequatur dolor doloribus
                        ea,
                        fuga id laudantium pariatur rerum voluptas. Ab consectetur delectus dignissimos doloremque
                        dolores
                        eos ex excepturi exercitationem!</p>
                }
            </div>
            <div className={styles.controls}>


                <button className={styles.control} onClick={handleClick}>
                    <Icon name={'CommentsSvg'} height={15} width={15}/><span>Answer</span>
                </button>


                <button className={styles.control}>
                    <ShareSvg/><span>Share</span>
                </button>
                <button className={styles.control}>
                    <ReportSvg/><span>Report</span>
                </button>
            </div>
        </div>
        {openCommentDesk ? <CommentForm ref={refTextarea}/> : null}
    </>
}
