import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reduser";
import {setTokenAC} from "../store/me/actions";

export const useToken = () => {
    const dispatch = useDispatch()
    const token = useSelector<RootState>(state => state.token)

    useEffect(() => {
        if (window.__token__) {
            console.log('token from useToken')
            dispatch(setTokenAC(window.__token__))
        }
    }, [dispatch])

    return [token]
}