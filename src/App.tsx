import React, { useState} from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {EColors, Text} from "./shared/Text";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostContextProvider} from "./shared/context/postContext";
import {commentContext} from "./shared/context/commentContext";

function AppComponent() {
    const [token] = useToken()
    const [commentValue, setCommentValue] = useState('')
    /*
    const handleAddItem = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
    }*/
    const CommentContextProvider = commentContext.Provider
    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostContextProvider>
                    <CommentContextProvider value={{value: commentValue, onChange: setCommentValue}}>
                        <Layout>
                            <Header/>
                            <Content>
                                <br/>
                                <Text size={20} mobileSize={28} color={EColors.orange}> Label1</Text>
                                <Text size={20}> Label2</Text>
                                <Text size={20} mobileSize={16}> Label3</Text>
                            </Content>
                        </Layout>
                    </CommentContextProvider>
                </PostContextProvider>
            </UserContextProvider>
        </tokenContext.Provider>
    )
}
export const App = hot(() => <AppComponent/>)