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

    const validateData = values => {
        const errors = {}
        if (!username || !password) {
            errors.username = 'User name or password is not entered'
        } else if (values.username.length > 15) {
            errors.username = 'User name or password is incorrect'
        }
        return errors
    }

    const validate = () => {
        if (username === validData.username && password === validData.password) {
            setTest(true);
        }
        else {
            setTest(false)
        }
    }

    if(!test){
        validateData();
    }

    if (test) {
        return <Redirect to={'/employeeList'} />
    }

    return (
        <div className="App">
            <form>  First name:<br />
                <input type="text" name="username" onChange={(event) => setUserName(event.target.value)} />
                <br />
                Last name:<br />
                <input type="text" name="password" onChange={(event) => setPassword(event.target.value)} />
                <br /><br />
                <button onClick={() => validate()}>
                    submit
               </button>
            </form>
        </div>
    );
}

export default LoginForm;
