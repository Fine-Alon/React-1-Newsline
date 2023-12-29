import React, { useEffect} from 'react';
import styles from './cardslist.css';
import cardStyles from "./Card/card.css";
import {Card} from "./Card";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reduser";
import {IPostContext} from "../../store/me/actions";

export const CardsList = () => {

    // const postArr = useContext(postContext)
    const postArr = useSelector<RootState,IPostContext[]>(state => state.posts)

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
