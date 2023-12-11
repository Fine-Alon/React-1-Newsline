import React, {useEffect} from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {EColors, Text} from "./shared/Text";
import {useToken} from "./hooks/useToken";
import {UserContextProvider} from "./shared/context/userContext";
import {PostContextProvider} from "./shared/context/postContext";
import {Action, applyMiddleware, createStore,} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReduser, RootState, setTokenCreator} from "./store";
import thunk, {ThunkAction} from "redux-thunk";

const timeout = (ms: number): ThunkAction<void, RootState, unknown, Action<string>> =>
    (dispatch, _getState) => {
        dispatch({type: 'START'})
        setTimeout(() => {
            dispatch({type: 'FINISH'})
        }, ms)
    }

const store = createStore(rootReduser,
    composeWithDevTools(applyMiddleware(thunk)))

function AppComponent() {

    // const [token] = useToken()
    useEffect(() => {
        const token = localStorage.getItem('token') || window.__token__
        store.dispatch(setTokenCreator(token))
        // @ts-ignore
        store.dispatch(timeout(3000))
        if (token) {
            localStorage.setItem('token', token)
        }
    }, []);

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