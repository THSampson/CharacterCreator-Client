import React, {useState} from 'react';
import {Button} from 'reactstrap';
import './Auth.css'

const Auth = (props) => {
    const [signIn, setSignIn] = useState(true)
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [showAlert, setShowAlert] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);

    const signInToggle = (event) => {
        event.preventDefault();

        console.log(disableSubmit);
        setSignIn(!signIn);
        setShowAlert(!showAlert)

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    const signupFields = () => !signIn ? (
        <div>
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input type = "text" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input type = "text" id="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>
    )  : null
        
    const hideAlert = () => setShowAlert(false);

    const userFunction = (event) => {
        event.preventDefault();
        let url = signIn ? 'http://localhost:3000/user/signin' : 'http://localhost:3000/user/signup'
        let userObject = {
            fName: firstName,
            lName: lastName,
            email,
            password
        };
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(userObject)
        })
        .then(res => res.json())
        .then(json => {console.log(json); props.setSessionToken(json.sessionToken)})
        .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={userFunction}>
                {signupFields()}
                <label htmlFor="email">Email:</label>
            <br />
            <input type = "text" id="id" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type = "text" id="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
            <br />
            <div id="passValid">
            {!signIn ? 
            password.length < 5 ? ('passwords must be at least 5 characters') : (null) 
            : null
            }
            </div>
            {signIn ? 
            <Button onClick={signInToggle}>Don't have an account yet? Click here to register</Button> : null}
            <br />
            <Button type="submit" disabled={password.length < 5 ? true : false}>{signIn ? 'Sign In' : 'Create Account'}</Button>
            </form>
        </div>
    )
}

export default Auth
