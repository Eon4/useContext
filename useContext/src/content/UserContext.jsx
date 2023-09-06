import {createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserContextProvider = ({children}) => {
    consy [UserContext, setUser] = useState ('test')

    return (
        <UserContext.Provider value = {{user,setUser}}>   
        {children}
        </UserContext.Provider>
    )

}