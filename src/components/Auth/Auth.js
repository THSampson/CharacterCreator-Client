import React, {useState} from 'react';
import './Auth.css'

const Auth = (props) => {
    const [signIn, setSignIn] = useState(true)
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');

    const signInToggle = (event) => {
        event.preventDefault();

        setSignIn(!signIn);

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
            body: JSON.stringify(userObject),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(json => {console.log(json); props.updateToken(json.sessionToken)})
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
            <input type = "password" id="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
            <br />
            {signIn ? 
            <button onClick={signInToggle}>Don't have an account yet? Click here to register</button> : null}
            <br />
            <button type="submit">Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth
