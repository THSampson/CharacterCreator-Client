import React, {useState} from 'react';
import './Auth.css'

const Auth = (props) => {
    const [signup, setSignup] = useState(true);
    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');

    const signupInfo = () => signup ? (
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
        let url = 'http://localhost:3000/user/signup'
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
                {signupInfo()}
                <label htmlFor="email">Email:</label>
            <br />
            <input type = "text" id="id" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type = "text" id="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
            <br />
            <button type="submit">Submit User Data</button>
            </form>
        </div>
    )
}

export default Auth
