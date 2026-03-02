import { NavLink } from 'react-router';
import './Navbar.css';

export default function Navbar({ }) {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="/User">User</NavLink>
        </div>
    )
}