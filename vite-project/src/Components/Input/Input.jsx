import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import './Input.css';

const Input = forwardRef(({ label, id, type, errorMsg, onKeyUp, format }, ref) => {
    const [error, setError] = useState();
    const inputRef = useRef();

    useImperativeHandle(ref,() => ({
        clear: () => inputRef.current.value = "",
        focus: () => inputRef.current.focus()
    }), [])

    const handleKeyUp = (e) => {
        if (!format.test(e.target.value)) {
            setError(true);
        } else {
            setError(false);
        }
        onKeyUp(e.target.value)
    }
    return (
        <div className="input">
            <label for={id}>{label}</label>
            <input id={id} type={type} onKeyUp={handleKeyUp} ref={inputRef} />
            {error &&
                <div className="error">{errorMsg}</div>
            }
        </div>
    )
})

export default Input;