import React, {useEffect} from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {EColors, Text} from "./shared/Text";
import {PostContextProvider} from "./shared/context/postContext";
import {applyMiddleware, createStore,} from "redux";
import {Provider, useDispatch} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReduser} from "./store/reduser";
import thunk from "redux-thunk";
import {saveToken} from "./store/me/actions";


const store = createStore(rootReduser,
    composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(saveToken())
    }, [dispatch]);

    return (
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
    )
}

export const App = hot(() => <Provider store={store}><AppComponent/></Provider>)