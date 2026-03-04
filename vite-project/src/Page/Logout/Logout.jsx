import { useContext, useEffect } from "react"
import { useNavigate } from "react-router";
import { useAuth } from "../../Context/auth.context";

export default function Logout({}){
    const {logout} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate("/Login");
    },[])
    return (
        <>

        </>
    )
}