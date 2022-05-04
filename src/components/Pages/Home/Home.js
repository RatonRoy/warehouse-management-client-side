import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../img/banner.jpg';
import './Home.css';

const Home = () => {
	/* const [users, setUser] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/user')
			.then(res => res.json())
			.then(data => setUser(data));
	}, []) */

	/* const handledeleteUser = (id) => {

		const process = window.confirm("Are you sure want to delete this item ?");
		if (process) {
			console.log("User Id ", id);
			const url = `http://localhost:5000/user/${id}`;
			fetch(url, {
				method: "DELETE"
			})
				.then(res => res.json())
				.then(data => {
					if (data.deletedCount > 0) {
						const remaining = users.filter(user => user._id !== id);
						setUser(remaining);
					}
				})
		}

	} */
	return (
		<section>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3'>
				<Container>
					<Navbar.Brand href="#home"> Fruit Store </Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Home</Nav.Link>
							<Nav.Link href="#pricing">Inventory</Nav.Link>
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			{/* End of the navbar  */}
			<div className="banner">
				<article className="banner-info">
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo iste illo voluptate laboriosam delectus deleniti at assumenda voluptas ducimus.
					</p>
				</article>
		    </div>











			{/* <h3> Total Users : {users.length} </h3>
			{
				users.map(user => <li
					key={user._id}
				> {user.name}  and  {user.email}
					<Link to={`/update/${user._id}`}><button> Update </button></Link>
					<button onClick={() => handledeleteUser(user._id)}>X</button>
				</li>)
			} */}
		</section>
	);
};

export default Home;