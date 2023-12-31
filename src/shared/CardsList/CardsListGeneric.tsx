import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import {GenericList} from "../GenericList";
import cardStyles from "./Card/card.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reduser";
import {IPostContext, setPost} from "../../store/posts/actions";

const onDeletePost = (id: string) => {
    console.log(id)
}

export function CardsListGeneric() {
    // const postArr = useContext(postContext)
    const postArr = useSelector<RootState, IPostContext[]>(state => state.posts.posts)
    const postArrError = useSelector<RootState, string>(state => state.posts.postsError)
    const after = useSelector<RootState, string>(state => state.posts.after)
    const [isPending, setIsPending] = useState(true)
    const bottomOfList = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsPending(postArr.length === 0)
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

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    console.log('end!!!', entries)

                    dispatch<any>(setPost(after))
                    console.log('after', after)
                }
            },
            {threshold: 0, rootMargin: '100px'}
        )

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        // Cleanup function
        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }
    }, [postArr, bottomOfList.current, after, dispatch]);

    return (
        <ul className={styles.cards_list}>
            {postArr.length === 0 && !postArrError && !isPending &&
                <div role={"alert"} style={{color: 'darkblue', textAlign: 'center'}}>NO POSTS YET...</div>}

            <GenericList list={cardArr}/>
            <div ref={bottomOfList}/>

            {postArrError && <div role={"alert"} style={{color: 'darkred', textAlign: 'center'}}>{postArrError}</div>}

            {!postArrError && isPending && <div role={"alert"} style={{textAlign: 'center'}}>Loading...</div>}

        </ul>
    );
}
