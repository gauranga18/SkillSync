import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/Firebase";
import { initializeAuth } from "firebase/auth";
const authContext = React.createContext();
import {onAuthStateChanged} from "firebase/auth";
export function useAuth(){
    return useContext(authContext);
}
export function authProvider ({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
useEffect(()=>{
const unsubscribe = auth.onAuthStateChanged(auth, initializeUser)
return unsubscribe;
}, [])
async function initializeUser(user){
    if(user){
        setCurrentUser({...user});
        setUserLoggedIn(true);
    }else{
        setCurrentUser(null);
        setUserLoggedIn(false);
    }
    setLoading(false);
    }
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return(
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}