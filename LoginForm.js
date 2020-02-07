import React, { useState } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';

const validData = {
    "username": "hruday@gmail.com",
    "password": 'hruday123'
}

const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [test, setTest] = useState(false);
    const [errorTest, setErrorTest] = useState('');

    const validateData = () => {
        if (!username || !password) {
            setErrorTest('User name or password is not entered');
        } else if (username !== validData.username || password !== validData.password) {
            setErrorTest('User name or password is incorrect');
        }
    }

    const validate = () => {
        if (username === validData.username && password === validData.password) {
            setTest(true);
        }
        else {
            validateData();
        }
    }

    if (test) {
        return <Redirect to={'/employeeList'} />
    }
    return (
        <div className="App">
            <header>  <h2>Login Form</h2></header>

            <div>  UserName:<br />
                <input type="text" name="username" onChange={(event) => setUserName(event.target.value)} />
                <br />
                Password:<br />
                <input type="text" name="password" onChange={(event) => setPassword(event.target.value)} />
                <br /><br />
                <button onClick={() => validate()}>
                    submit
               </button>
                <h1>{errorTest}</h1>
            </div>
        </div>
    );
}

export default LoginForm;
