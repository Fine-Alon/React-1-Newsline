import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {generateId} from "./utils/js/generateRandomIndex";
import {GenericList} from "./shared/GenericList";
import {Card} from "./shared/CardsList/Card";
import styles from "./shared/CardsList/cardslist.css";
import cardStyles from "./shared/CardsList/Card/card.css";

const cardArr = [
    {As: 'li' as const, text: <Card/>},
    {As: 'li' as const, text: <Card/>},
    {As: 'li' as const, text: <Card/>},
    {As: 'li' as const, text: <Card/>},
].map(item => ({...generateId(item), className: cardStyles.card}))


function AppComponent() {

    const [list, setList] = React.useState(cardArr)

    /* const handleItemClick = (id: string) => {
         setList(list.filter(item => item.id !== id))
     }
     const handleAddItem = () => {
         setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
     }*/

    return (
        <Layout>
            <Header/>
            <Content>
                <ul className={styles.cardsList}>
                    <GenericList list={cardArr}/>
                </ul>
            </Content>
            {/* <button onClick={handleAddItem}>Add Item</button>
                <ul>
                    <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
                </ul>
                <Dropdown onOpen={() => console.log('opened')}
                          onClose={() => console.log('closed')}
                          button={<button>Test Open</button>}>
                    <CardsList/>
                </Dropdown>*/}
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>)