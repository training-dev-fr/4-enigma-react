import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);


const AuthProvider = ({children}) => {
    let userStorage = localStorage.getItem('user');
    const [user, setUser] = useState(userStorage?JSON.parse(userStorage):null);

    const setAuth = (newUser) => {
        if(!newUser.token){
            throw new Error('Unauthorized user');
        }
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser)
    }

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, setAuth, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export {  useAuth, AuthProvider };
