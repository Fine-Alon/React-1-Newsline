import React, {useRef, useState} from 'react';
import styles from './Comments.css';
import {ReportSvg, ShareSvg} from "../icons";
import {Icon} from "../Icon";
import {CommentFormContainer} from "../CommentsArea/CommentFormContainer";
import {generateRandomString} from "../../utils/js/generateRandomIndex";

interface ICommentProps {
    innerComments?: Object[]
    postId?: string
    id?: string
    name?: string
    icon?: string
    commentBody?: string
}

export const Comments: React.FC<ICommentProps> = (props) => {
    const {
        id, commentBody, innerComments,
        name, postId, icon
    } = props
    const [openCommentDesk, setOpenCommentDesk] = useState(false)
    // const refTextarea = useRef<HTMLTextAreaElement>(null)

    const handleClick = () => {
        setOpenCommentDesk(!openCommentDesk)
        // refTextarea.current?.focus()
    }

    return <>
        <div className={styles.comments_block}>
            <div className={styles.user_info}>
                <a href={'#'} className={styles.user_link}>
                    {icon ? icon : <Icon name={'AnonSvg'} height={20} width={20}/>}
                    <span>{name ? name : 'name'}</span>
                </a>
                <span className={styles.timing}>Timing</span>
                <span className={styles.community}>Community</span>
            </div>
            <div className={styles.comment_text}>
                {commentBody ? commentBody
                    : <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut dolor doloribus !</p>
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
        {innerComments?.map((topLevelComments: any, index) => {
            const uniqueKey = generateRandomString()
            return (
                <div key={uniqueKey + index} style={{paddingLeft: '60px'}}>
                    <Comments key={uniqueKey} id={topLevelComments.author} commentBody={topLevelComments.body}
                              postId={postId} name={topLevelComments.author}
                              innerComments={topLevelComments.replies}/>
                </div>
            )
        })}
        {openCommentDesk ? <CommentFormContainer name={name} id={id}/> : null}
    </>
}
