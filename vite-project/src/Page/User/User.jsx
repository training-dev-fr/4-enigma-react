import { useEffect, useState } from 'react';
import './User.css';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router';

export default function User({ }) {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUserList(data.users));
    })
    return (
        <>
            {userList.map(user => {
                return (
                    <Link to={`/User/${user.id}`}>
                        <Card user={user} />
                    </Link>
                );
            })}
        </>
    )
}