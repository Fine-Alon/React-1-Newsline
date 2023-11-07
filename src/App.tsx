import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {generateId, generateRandomString} from "./utils/js/generateRandomIndex";
import {GenericList} from "./shared/GenericList";
import {merge} from "./utils/js/merge";

const LIST = [
    {As: 'li' as const, text: 'other some'},
    {As: 'li' as const, text: 'some'},
    {As: 'li' as const, text: 'some'},
].map(generateId)

function AppComponent() {

    const [list, setList] = React.useState(LIST)

    const handleItemClick = (id: string) => {
        setList(list.filter(item => item.id !== id))
        console.log(list)
    }
    const handleAddItem = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
        console.log(list)
    }


    return (
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
                <button onClick={handleAddItem}>Add Item</button>
                <ul>
                    <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
                </ul>
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>)