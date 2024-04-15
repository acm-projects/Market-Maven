import { UserContext } from "../context/userContext";
import { useContext } from "react";

export const useUserContext = () => {
    const context = useContext(UserContext)

    if (!context){
        throw Error('useUserContext must be used inside UserContextProvider')
    }

    return context;
}