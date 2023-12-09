import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {EColors, Text} from "./shared/Text";
import {useToken} from "./hooks/useToken";
import {UserContextProvider} from "./shared/context/userContext";
import {PostContextProvider} from "./shared/context/postContext";
import {createStore,} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReduser} from "./store";

const store = createStore(rootReduser, composeWithDevTools())

function AppComponent() {

    const [token] = useToken()

    return (
        <UserContextProvider>
            <PostContextProvider>
                <Layout>
                    <Header/>
                    <Content>
                        <br/>
                        <Text size={20} mobileSize={28} color={EColors.orange}> Label1</Text>
                        <Text size={20}> Label2</Text>
                        <Text size={20} mobileSize={16}> Label3</Text>
                    </Content>
                </Layout>
            </PostContextProvider>
        </UserContextProvider>

    )
}

export const App = hot(() => <Provider store={store}><AppComponent/></Provider>)