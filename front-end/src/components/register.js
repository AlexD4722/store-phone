import React, { useState } from 'react';
import '../styles/login.scss';


function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
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
                    <h1 class="form-heading">REGISTER</h1>
                    <div class="form-group">
                        <i class="fa-regular fa-user icon"></i>
                        <input value={username} onChange={handleUsernameChange} type="text" class="form-input" id="username" name="username" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <i class="fa-regular fa-user icon"></i>
                        <input value={email} onChange={handleEmailChange} type="text" class="form-input" id="username" name="username" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <i class="fa-solid fa-key icon"></i>
                        <input value={password} onChange={handlePasswordChange} id="password" name="password" type="password" class="form-input" placeholder="Password" />
                        <i id="eye_toggle" class="fa-solid fa-eye-slash icon"></i>
                        <i class="fa-solid fa-eye-slash icon"></i>
                    </div>
                    <input type="submit" value="Register" class="form-submit" />
                    <a id="register" href="login.php">LOGIN</a>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;