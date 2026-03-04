import { useContext, useEffect } from "react"
import AuthContext from "../../Context/auth.context"
import { useNavigate } from "react-router";

export default function Logout({}){
    const {setAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        setAuth(null);
        navigate("/Login");
    },[])
    return (
        <>

        </>
    )
}