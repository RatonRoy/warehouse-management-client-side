import React from 'react';
import './Adduser.css';

const Adduser = () => {
	const handleForm = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const user = { name, email };

		// const data = { username: 'example' };

		fetch('http://localhost:5000/user', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
				alert('User Added SuccessFully ');
				e.target.reset();
			})
		/* .catch((error) => {
			console.error('Error:', error);
		});
*/


	}
	return (
		<section className="section-center">
			<h1 className="text-center">Add A New User</h1>
			<form onSubmit={handleForm} className='from-container'>
				<input type="text" name="name" id="" required placeholder='Name' />
				<br />
				<input type="email" name="email" id="" required placeholder='Email' />
				<br />
				<input type="submit" value="ADD USER" className='submit' />
			</form>
		</section>
	);
};

export default Adduser;