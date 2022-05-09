import React, { useState } from 'react';
import { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
// import auth from '../../../../firebase.init.js';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loding/Loding';


const Register = () => {
	const [agree, setAgree] = useState(false)
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
	// use navigate hooks 
	const navigate = useNavigate();
	// if user is true then go to the home page 
	if (user) {
		navigate('/home');
	}
	// use the useRef() hook 
	const emailRef = useRef('');
	const nameRef = useRef('');
	const passwordRef = useRef('');


	const handaleLogin = () => {
		navigate('/login');
	}
	
		// loding 
		if (loading) {
			return <Loading></Loading>
		}

	const handleRegisterFrom = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		await createUserWithEmailAndPassword(email, password);
		console.log(email, password, name);
	}
	return (
		<div>
			<h1 className="text-success text-center"> Please Register  </h1>
			<div className="register-container login-container container w-50 mx-auto">
				<Form onSubmit={handleRegisterFrom}>
					<Form.Group className="mb-3" controlId="formBasicText">
						<Form.Label>Name : </Form.Label>
						<Form.Control ref={nameRef} type="text" placeholder="Name" required className='py-2' />

					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control ref={emailRef} type="email" placeholder="Enter email" required className='py-2' />
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control ref={passwordRef} type="password" placeholder="Password" required className='py-2' />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox"
							onClick={() => setAgree(!agree)}
							className = {`${agree ? 'text-success' : 'text-danger'}`}
							label="Agree with terms and conditions" />
					</Form.Group>
					<Button variant="success w-25" type="submit"
						disabled = {!agree} className = 'register'
					>
						Register
					</Button>
				</Form>
				<p className='register-text'>Already have an account  <span className='text-success register-text' onClick={handaleLogin}> Please Login</span> </p>
				<SocialLogin></SocialLogin>
			</div>
			
		</div>
	);
};

export default Register;