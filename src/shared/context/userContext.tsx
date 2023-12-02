import React, {createContext, ReactNode} from "react";
import {useUserData} from "../../hooks/useUserData";

export interface IUserContextData {
    name?: string
    iconImg?: string
}

export const userContext = createContext<IUserContextData>({})

export const UserContextProvider = ({children}: { children: ReactNode }) => {
    const [data] = useUserData()

    return <>
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    </>
}