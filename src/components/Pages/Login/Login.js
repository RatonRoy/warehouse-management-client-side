import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useNavigate,useLocation } from 'react-router-dom';
import './Login.css';
import auth from '../../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loding/Loding';
import axios from 'axios';

const Login = () => {
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);
	// reset password 
	const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
		auth
	  );
	// use the useRef() hook 
	const emailRef = useRef('');
	const passwordRef = useRef('');
	// use navigate hooks 
	const navigate = useNavigate();
	const location = useLocation();
	
	// Redirect to  the login page
	
	let from = location.state?.from?.pathname || "/";

	if (user) {
		/* navigate(from, { replace: true }); */
	}
	let emailError;
	if (error) {
		
		emailError = <div>
			<p className='text-danger'>Error: {error?.message}
			
			</p>
		</div>
	}
	
	const resetPassword = async() => {
		const email = emailRef.current.value; 
		if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
	}
	const handleLoginFrom = async event => {
		event.preventDefault();
		const email = emailRef.current.value; 
		const password = passwordRef.current.value; 
		await signInWithEmailAndPassword(email, password)
		const { data } = await axios.post('http://localhost:5000/login', { email })
		localStorage.setItem('accessToken', data.accessToken)
		navigate(from, { replace: true });
		
		
	}
		// loding 
		if (loading || sending) {
			return <Loading></Loading>
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
				<Button variant="success w-25" type="submit" className='login'>
					Login 
				</Button>
			</Form>
			<p className='register-text'>New to the Fruit Store? <span className='text-success register-text' onClick={handaleRegister}> Please Register </span> </p>
			<p className='register-text'>Forgot Password? <span className='text-success register-text' onClick={resetPassword}> Reset Password  </span> </p>
			{ emailError }
			<SocialLogin></SocialLogin>
			<ToastContainer />
		</div>
	);
};

export default Login;