import React, {useState} from 'react';
import {Form, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';
import './Auth.css'

const Auth = (props) => { 
    const [signIn, setSignIn] = useState(true)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            <Form className="signupFields">
            <Label size="lg" htmlFor="firstName" style={{fontWeight: "bold"}}>First Name:</Label>
            <br />
            <Input size="lg" type = "text" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} style={{fontWeight: "bold"}}/>
            <br />
            <Label size="lg" htmlFor="lastName" style={{fontWeight: "bold"}}>Last Name:</Label>
            <br />
            <Input size="lg" type = "text" id="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} style={{fontWeight: "bold"}}/>
       </Form>
       <br/>
        </div>
    )  : null
        
    const userFunction = (event) => {
        event.preventDefault();
        let url = signIn ? `${APIURL}/user/signin` : `${APIURL}/user/signup`
        let userObject = {
            fName: firstName,
            lName: lastName,
            email: email,
            password: password,
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
        <div className="div">
            <Form onSubmit={userFunction}>
                {signupFields()}
            <Label htmlFor="email" style={{fontWeight: "bold"}}>Email:</Label>
            <br />
            <Input size="lg"  type = "email" id="id" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{fontWeight: "bold"}}/>
            <br />
            <Label htmlFor="password" style={{fontWeight: "bold"}}>Password:</Label>
            <br />
            <Input size="lg" type = "password" id="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} style={{fontWeight: "bold"}}/>
            <br />
            <div id="passValid">
            {!signIn ? 
            password.length < 5 ? ('passwords must be at least 5 characters') : (null) 
            : null
            }
            </div>
            {signIn ? 
            <Button onClick={signInToggle} color="outline-dark">Don't have an account yet? Click here to register</Button> : null}
            <br />
            <Button type="submit" disabled={password.length < 5 ? true : false} color="success">{signIn ? 'Sign In' : 'Create Account'}</Button>
            </Form>
        </div>
    )
}

export default Auth;
