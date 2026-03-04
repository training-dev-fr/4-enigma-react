import { NavLink } from 'react-router';
import './Navbar.css';
import { useAuth } from '../../Context/auth.context';

export default function Navbar({ }) {
    const {user} = useAuth();
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/User">User</NavLink>
            {!user &&
                <NavLink to="/Login">Connexion</NavLink>
            }
            {user &&
                <NavLink to="/Logout">Déconnexion</NavLink>
            }
        </div>
    )
}