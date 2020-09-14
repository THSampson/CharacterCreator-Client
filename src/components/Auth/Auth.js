import React, {useState} from 'react';
import {Form, Label, Input, Button} from 'reactstrap';
import './Auth.css'

const Auth = (props) => {
    const [signup, setSignup] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupInfo = () => signup ? (
        <div>
            <Form>
            <Label htmlFor="firstName">First Name:</Label>
            <br />
            <Input type = "text" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <br />
            <Label htmlFor="lastName">Last Name:</Label>
            <br />
            <Input type = "text" id="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
       </Form>
        </div>
    )  : null
        
    

    const userFunction = (event) => {
        event.preventDefault();
        let url = 'http://localhost:3000/user/signup'
        let userObject = {
            fName: firstName,
            lName: lastName,
            email: email,
            password: password,
        };
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(userObject)
        })
        .then(res => res.json())
        .then(json => {console.log(json); props.updateToken(json.sessionToken)})
        .catch(err => console.log(err))
    }
    return (
        <div>
            <Form onSubmit={userFunction}>
                {signupInfo()}
            <Label htmlFor="email">Email:</Label>
            <br />
            <Input type = "text" id="id" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br />
            <Label htmlFor="password">Password:</Label>
            <br />
            <Input type = "text" id="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}/>
            <br />
            <Button type="submit">Submit User Data</Button>
            </Form>
        </div>
    )
}

export default Auth
