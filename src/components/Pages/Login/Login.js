import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useNavigate,useLocation } from 'react-router-dom';
import './Login.css';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useSignInWithEmailAndPassword(auth);
	// use the useRef() hook 
	const emailRef = useRef('');
	const passwordRef = useRef('');
	// use navigate hooks 
	const navigate = useNavigate();
	// Redirect to  the login page
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	if (user) {
		navigate(from, { replace: true });
	}
	const handleLoginFrom = (e) => {
		e.preventDefault();
		const email = emailRef.current.value; 
		const password = passwordRef.current.value; 
		signInWithEmailAndPassword(email, password)
		console.log(email, password);
		
	}
	const handaleRegister = () => {
		navigate('/register');
	}
	return (
		<div className='login-container container w-50 mx-auto '>
			<h1 className='text-success text-center pt-3'> Please Login  </h1>
			<Form onSubmit={handleLoginFrom}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control ref={emailRef} type="email" placeholder="Enter email"  required className='py-2'/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control ref = { passwordRef} type="password" placeholder="Password"  required className='py-2'/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Login 
				</Button>
			</Form>
			<p className='register-text'>New to the Fruit Store? <span className='text-danger register' onClick={handaleRegister}> Please Register </span> </p>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Login;