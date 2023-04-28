import React from 'react';
import {useState} from 'react';
const Login = () => {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    return(
        <>
            <form>
                <label>Username:</label>
                <input name="username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            
                <label>Password:</label>
                <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button>Confirm</button>
            </form>
            <p>Username is {username} and password is {password}</p>
        </>
    );
}
export default Login;