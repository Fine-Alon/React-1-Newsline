import React, {useEffect, useState} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import {GenericList} from "../GenericList";
import cardStyles from "./Card/card.css";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reduser";
import {IPostContext} from "../../store/me/actions";
import {MeState} from "../../store/me/reduser";
import {log} from "util";

const onDeletePost = (id: string) => {
    console.log(id)
}

export function CardsListGeneric() {
    // const postArr = useContext(postContext)
    const postArr = useSelector<RootState, IPostContext[]>(state => state.posts)
    const postArrError = useSelector<RootState, string>(state => state.postsError)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        postArr.length ? setIsPending(false) : setIsPending(true)
    }, [postArr.length]);

    const cardArr = postArr.map(post => (
        {
            As: 'li' as const,
            text: <Card key={post.id}
                        id={post.id}
                        postId={post.id}
                        subreddit={post.subreddit}
                        author={post.author}
                        created={post.created}
                        icon_img={post.icon_img}
                        banner_img={post.banner_img}
                        ups={post.ups} url={post.url}
                        title={post.title}/>,
            className: cardStyles.card,
            id: post.id || ''
        }
    ))

    return (
        <ul className={styles.cardsList}>
            {postArrError && <div role={"alert"} style={{display: 'flex', color: 'darkred', justifyContent: 'center'}}>
                {postArrError}
            </div>}
            {!postArrError && isPending &&
                <div role={"alert"} style={{display: 'flex', justifyContent: 'center'}}>Loading...</div>}
            <GenericList list={cardArr}/>
        </ul>
    );
}
