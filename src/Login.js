import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Firebase from './firebase.js';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const signIn=e=>{
  e.preventDefault();
}

const signUp=e=>{
  e.preventDefault();
  Firebase.auth.createUserWithEmailAndPassword(email,password)
  .then((auth)=>{
    console.log(auth);
  })
  .catch(error=>alert(error.message))
}

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email or password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Terms and Conditions" />
      </Form.Group> */}
      <Button variant="primary" type="submit" onClick={signIn}>
        Log in
      </Button>
      <br></br>
      <br></br>
      Not have an account?&nbsp;
      <Button variant="primary" type="submit" onClick={signUp}>
        Sign up
      </Button>
    </Form>
  );
}

export default Login;