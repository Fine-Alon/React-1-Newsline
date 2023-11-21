import React, {useContext, useEffect} from 'react';
import styles from './cardslist.css';
import cardStyles from "./Card/card.css";
import {postContext} from "../context/postContext";
import {Card} from "./Card";

export const CardsList = () => {

    const postArr = useContext(postContext)

    useEffect(() => {
        console.log(postArr)
    }, [postArr]);

    return (
        <ul className={styles.cardsList}>
            {postArr.map(post => (
                <li className={cardStyles.card}>
                    <Card id={post.id} postId={post.id}
                          author={post.author}
                          created={post.created}
                          icon_img={post.icon_img}
                          banner_img={post.banner_img}
                          ups={post.ups} url={post.url}
                          title={post.title}/>
                </li>
            ))}
        </ul>
    );
}
