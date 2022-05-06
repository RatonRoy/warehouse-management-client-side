import React from 'react';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './Register.css';


const Register = () => {
	// use the useRef() hook 
	const emailRef = useRef('');
	const nameRef = useRef('');
	const passwordRef = useRef('');
	// use navigate hooks 
	const navigate = useNavigate();
	const handaleLogin = () => {
		navigate('/login');
	}

	const handleRegisterFrom = (e) => {
		e.preventDefault();
		const name = nameRef.current.value; 
		const email = emailRef.current.value; 
		const password = passwordRef.current.value; 
		console.log(email, password, name);
	}
	return (
		<div>
			<h1 className="text-success text-center"> Please Register  </h1>
			<div className="register-container login-container container w-50 mx-auto">
			<Form onSubmit={handleRegisterFrom}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name : </Form.Label>
					<Form.Control ref={nameRef} type="email" placeholder=" Name "  required className='py-2'/>
					
				</Form.Group>
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
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login 
				</Button>
				</Form>
				<p className='register-text'>Already Have An Account  <span className='text-success register' onClick={handaleLogin}> Please Login </span> </p>
			</div>
		</div>
	);
};

export default Register;