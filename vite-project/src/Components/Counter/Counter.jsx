import { useState } from 'react';
import './Counter.css';

export default function Counter(props){
    const [count,setCount] = useState(props.count);
    return (
        <div className="counter" onClick={() => setCount(count+1)}>
            Valeur : {count}
        </div>
    )
}