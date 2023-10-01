import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Observing current user", currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInformation = { user, CreateUser, singInUser }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node,
}
export default UserProvider;