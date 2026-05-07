import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (username === savedUsername && password === savedPassword) {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/game");
        }   else {
            setMessage("Wrong username or password.")
        }
    }
    
    return (
        <main className="register-page">
            <form className="register-card" onSubmit={handleLogin}>
                <h1>Login</h1>

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

                <button type="submit">Login</button>

                {message && <p className="message">{message}</p>}
            </form>
        </main>
    );    
}

export default Login;
