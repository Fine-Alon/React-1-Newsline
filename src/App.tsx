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
import {EColors, Text} from "./shared/Text";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";

const onDeletePost = (id: string) => {
    console.log(id)
}

const initialCardArr = [
    {As: 'li' as const, text: <Card/>},
    {As: 'li' as const, text: <Card/>},
    {As: 'li' as const, text: <Card/>},
    {As: 'li' as const, text: <Card/>},
].map(item => ({...generateId(item)}))

const cardArrWithProps = initialCardArr.map(li => ({
    As: 'li' as const,
    text: <Card onDeletePost={onDeletePost} postId={li.id}/>,
    className: cardStyles.card,
    id: li.id
}))


function AppComponent() {
    const [cardArr, setCardArr] = React.useState(cardArrWithProps)

    const [token] = useToken()
    const {Provider} = tokenContext
    /*const onDeletePost = (id: string) => {
        console.log(id)
        // setCardArr(cardArr.filter(card => card.id !== id))
    }
    const handleAddItem = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
    }*/

    return (
        <Provider value={token}>
            <Layout>
                <Header />
                <Content>
                    <ul className={styles.cardsList}>
                        <GenericList list={cardArr}/>
                    </ul>
                    <br/>
                    <Text size={20} mobileSize={28} color={EColors.orange}> Label1</Text>
                    <Text size={20}> Label2</Text>
                    <Text size={20} mobileSize={16}> Label3</Text>
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
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>)