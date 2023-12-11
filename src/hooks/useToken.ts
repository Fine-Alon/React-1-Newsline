import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState, setTokenCreator} from "../store";

export const useToken = () => {
    const dispatch = useDispatch()
    const token = useSelector<RootState>(state => state.token)

    useEffect(() => {
        if (window.__token__) {
            dispatch(setTokenCreator(window.__token__))
        }
    }, [token])

    return [token]
}