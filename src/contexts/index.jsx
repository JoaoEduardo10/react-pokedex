import { useContext, useReducer } from "react"
import { Context } from "./context"

import { reducer } from "./reducer"
import { data } from './data'

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data) 
    const value = { state, dispatch }

    return <Context.Provider value={value}>{children}</Context.Provider>
}


export const useMyRook = () => {
    const context = useContext(Context)

    if(context === undefined){
        throw new Error('Voçê não adicionou o <AppContext /> na aplicaçao')
    }

    return context
}