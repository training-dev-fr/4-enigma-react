import { useRef } from 'react';
import Input from '../../Components/Input/Input';
import './Home.css';

export default function Home({ }) {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleReset = () => {
        emailRef.current.clear();
        passwordRef.current.clear();
        emailRef.current.focus();
    }
    return (
        <>
            <Input
                label="Email"
                type="email"
                format={/.+@.+/}
                id="email"
                errorMsg="l'e-mail est obligatoire et doit contenir un @"
                onKeyUp={(value) => console.log(value)}
                ref={emailRef}
            />
            <Input
                label="Mot de passe" 
                type="password" 
                format={/(.){6,}/} 
                id="password" 
                errorMsg="Le mot de passe doit contenir au moins 6 caractères" 
                onKeyUp={(value) => console.log(value)}
                ref={passwordRef}
            />
            <button>Connexion</button>
            <button onClick={handleReset}>Reset</button>

        </>
    )
}