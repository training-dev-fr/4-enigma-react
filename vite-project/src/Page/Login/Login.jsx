import { useState } from 'react';
import PasswordField from '../../Components/PasswordField/PasswordField';
import './Login.css';
import { useNavigate } from 'react-router';

export default function Login({ }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const authenticate = () => {
        console.log(user);
        navigate("/");
    }

    return (
        <div className="login">
            <h2>Connexion</h2>
            <p>Entrez vos identifiants pour accéder à votre compte</p>
            <div className="form">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onKeyUp={(e) => setUser({...user,email:e.target.value})} />
                </div>
                <div className="form-group">
                    <div className="label-group">
                        <label>Mot de passe</label>
                        <a href="#">Mot de passe oublié?</a>
                    </div>
                    <PasswordField onKeyUp={(e) => setUser({...user,password:e.target.value})} />
                </div>
                <div className="form-group">
                    <label>
                        <input type="checkbox"/>
                        Se souvenir de moi
                    </label>
                </div>
                <div className="form-group">
                    <button className="connexion" onClick={authenticate}>Connexion</button>
                </div>
                <div className="form-group">
                    <div className="link">Vous n'avez pas de compte? <a href="#">S'inscrire</a></div>
                </div>
            </div>
        </div>
    )
}