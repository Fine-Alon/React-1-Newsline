import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import {GenericList} from "../GenericList";
import {generateId} from "../../utils/js/generateRandomIndex";
import cardStyles from "./Card/card.css";

const onDeletePost = (id: string) => {
    console.log(id)
}

export function CardsListGeneric() {
    const initialCardArr = [
        {As: 'li' as const, text: <Card/>},
    ].map(item => ({...generateId(item)}))

    const cardArrWithProps = initialCardArr.map(li => ({
        As: 'li' as const,
        text: <Card onDeletePost={onDeletePost} postId={li.id}/>,
        className: cardStyles.card,
        id: li.id
    }))

    const [cardArr, setCardArr] = React.useState(cardArrWithProps)

    return (
    <ul className={styles.cardsList}>
        <GenericList list={cardArr}/>
    </ul>
  );
}
