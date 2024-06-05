import "./Login.css"
import { useState } from 'react';
import { AuthenticateUser } from "./utils";

export default function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const disabledButton = email.length < 10 && password.length < 6;

    const loginUser = async () => {
        try {
            const message = await AuthenticateUser({ email, password });
            alert(message);
            setEmail("");
            setPassword("");
        } catch (err) {
            alert(err.message);
        }
    };


    return (
        <>
            <div className="mainCard">
                <div className="row">

                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="row">
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div><button disabled={disabledButton} onClick={loginUser}>Login</button></div>
            </div></>
    )
}