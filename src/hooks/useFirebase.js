import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () =>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

        .finally(() =>setIsLoading(false));
        
    }

    const logout = () =>{
        setIsLoading(true);
        signOut(auth)
        .then (() =>{
            setUser({});
        })
        .finally(() => setIsLoading(false))
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user => {
            if(user){
                console.log(user);
                setUser(user)
            }
            setIsLoading(false);
        })

    }, [auth])

    return{
        user,
        signInWithGoogle,
        logout,
        isLoading
    }



}
export default useFirebase;