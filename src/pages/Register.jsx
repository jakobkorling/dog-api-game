import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleRegister(event) {
        event.preventDefault();

        if (username === "" || password === "") {
            setMessage("Field cannot be empty.");
            return;
        }

        if (password.length < 6) {
            setMessage("Password must be atleast 6 characters long.");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        navigate("/login");
    }

    return (
        <main className="register-page">
            <form className="register-card" onSubmit={handleRegister}>
                <h1>Register</h1>

                <label>Username</label>
                <input 
                    type="text"
                    placeholder="Enter username" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)} 
                />

                <label>Password</label>
                <input 
                    type="password"
                    placeholder="Enter password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} 
                />

                <button type="submit">Register</button>

                {message && <p className="message">{message}</p>}
            </form>
        </main>
    );
}

export default Register;