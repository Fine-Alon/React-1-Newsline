import React, {useEffect} from 'react';
import styles from './content.css';
import {CardsListGeneric} from "../CardsList/CardsListGeneric";
import {setPost} from "../../store/posts/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reduser";

interface IContentProps {
    id?: string;
    children?: React.ReactNode
}

export const Content: React.FC<IContentProps> = ({children}) => {
    const dispatch = useDispatch()
    const after = useSelector<RootState, string>(state => state.posts.after)

    useEffect(() => {
        dispatch<any>(setPost(after))
    }, [dispatch]);

    return <main className={styles.content}>
        <CardsListGeneric/>
        {children}
    </main>
}
