import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reduser";
import {meRequestAsync} from "../store/me/actions";

interface IUserData {
    name?: string
    iconImg?: string
}

export const useUserData = () => {
    const data = useSelector<RootState, IUserData>(state => state.me.data)
    const isLoading = useSelector<RootState, boolean>(state => state.me.isLoading)
    const token = useSelector<RootState>(state => state.token)
    const dispatch = useDispatch()

    useEffect(() => {
        if (token !== "" && token !== "undefined") {
            dispatch<any>(meRequestAsync())
        }
    }, [token])

    return {
        data,
        isLoading
    }
}