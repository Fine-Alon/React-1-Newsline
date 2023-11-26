import React, {useContext} from 'react';
import styles from './cardslist.css';
import {Card} from './Card';
import {GenericList} from "../GenericList";
import {generateId} from "../../utils/js/generateRandomIndex";
import cardStyles from "./Card/card.css";
import {postContext} from "../context/postContext";

const onDeletePost = (id: string) => {
    console.log(id)
}

export function CardsListGeneric() {
    const postArr = useContext(postContext)
/*
    const [cardArr, setCardArr] = React.useState(postArr)
*/

    const cardArr = postArr.map(post => (
        {
            As: 'li' as const,
            text: <Card id={post.id}
                        postId={post.id}
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

            <GenericList list={cardArr}/>
        </ul>
    );
}
