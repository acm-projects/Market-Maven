import React, { createContext, useState, useEffect} from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null)
    const [refresh, setRefreshToken] = useState(null)
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedAccessToken = localStorage.getItem("accessToken")
        const storedRefreshToken = localStorage.getItem("refreshToken")
        const storedUser = localStorage.getItem("username")

        setAccessToken(storedAccessToken)
        setRefreshToken(storedRefreshToken)
        setUser(storedUser)

        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{ accessToken, refreshToken, loading}}>
            { children }
        </AuthContext.Provider>
    )
}


// Dave Gray tutorial if you want to come back to this starting point of auth context
// import { createContext, useReducer } from "react";

// export const AuthContext = createContext()

// export const authReducer = (state, action) => {
//     switch (action.type){
//         case 'LOGIN':
//             return { user: action.payload } 
//         case 'LOGOUT':
//             return { user: null }
//         default:
//             return state
//     }
// }

// export const AuthcontextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, { user: null })

//     console.log('AuthContext state: ', state)

//     return(
//         <AuthContext.Provider value={{...state, dispatch}}>{ children }</AuthContext.Provider>
//     )
// }