import React, { useState } from 'react';
import '../styles/login.scss';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // ...
    };

    return (
        <div id="login">
            <div id="wapper">
                <form method="get" action="" id="form-login">
                    <h1 className="form-heading">LOGIN</h1>
                    <div className="form-group">
                        <i className="fa-regular fa-user icon"></i>
                        <input value={username} onChange={handleUsernameChange} type="text" class="form-input" id="username" name="username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <i className="fa-solid fa-key icon"></i>
                        <input value={password} onChange={handlePasswordChange} id="password" name="password" type="password" class="form-input" placeholder="Password"/>
                            <i id="eye_toggle" class="fa-solid fa-eye-slash icon"></i>
                             <i className="fa-solid fa-eye-slash icon"></i> 
                    </div>
                    <input type="submit" value="Login" className="form-submit"/>
                        <a id="register" href="register.php">REGISTER</a>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;