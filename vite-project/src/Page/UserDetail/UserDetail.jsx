import { useParams } from 'react-router';
import './UserDetail.css';
import { useEffect, useState } from 'react';

export default function UserDetail({}){
    const {userId} = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    },[userId]);

    return (
        <>
            {user.firstName}
        </>
    )
}