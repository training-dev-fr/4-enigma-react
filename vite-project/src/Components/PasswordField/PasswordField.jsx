import { Eye, EyeOff } from 'lucide-react';
import './PasswordField.css';
import { useState } from 'react';

export default function PasswordField({onKeyUp }) {
    const [visible, setVisible] = useState(true);
    return (
        <div className="password-field">
            <input type={visible?"text":"password"} onKeyUp={(e)=> onKeyUp(e)}/>
            {visible &&
                <Eye onClick={() => setVisible(false)}/>
            }
            {!visible &&
                <EyeOff onClick={() => setVisible(true)}/>
            }
        </div>
    )
}