import './Card.css';

export default function Card({user}) {

    return (
        <div className="card">
            <div className="name">
                {user.firstName} {user.lastName}
            </div>
            <div className="email">
                {user.email}
            </div>
        </div>
    )
}