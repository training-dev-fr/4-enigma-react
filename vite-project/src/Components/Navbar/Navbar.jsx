import { NavLink } from 'react-router';
import './Navbar.css';
import { useContext } from 'react';
import AuthContext from '../../Context/auth.context';

export default function Navbar({ }) {
    const {auth} = useContext(AuthContext);
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/User">User</NavLink>
            {!auth &&
                <NavLink to="/Login">Connexion</NavLink>
            }
            {auth &&
                <NavLink to="/Logout">Déconnexion</NavLink>
            }
        </div>
    )
}