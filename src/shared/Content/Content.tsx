import React, {useEffect} from 'react';
import styles from './content.css';
import {CardsListGeneric} from "../CardsList/CardsListGeneric";
import {setPost} from "../../store/me/actions";
import {useDispatch} from "react-redux";

interface IContentProps {
    id?: string;
    children?: React.ReactNode
}

export const Content: React.FC<IContentProps> = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch<any>(setPost())
    }, [dispatch]);

    return <main className={styles.content}>
        <CardsListGeneric/>
        {children}
    </main>
}
