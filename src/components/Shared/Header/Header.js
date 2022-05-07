import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
	const [user] = useAuthState(auth);
	const handleSignOut = () => {
		signOut(auth);
	}
	return (
		<header>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as = {Link} to ="/">Fruit Store</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
						<Nav.Link as={Link} to="/inventory" >Inventory</Nav.Link>
								
						</Nav>
						<Nav>
							
							{
								user ?
									<>
									<Nav.Link as={Link} to="/login">
										  Manage Fruits 
								   </Nav.Link>
									<Nav.Link as={Link} to="/login">
										  Add Fruits 
								   </Nav.Link>
									<Nav.Link as={Link} to="/login">
										 My Fruits 
								   </Nav.Link>
										<Nav.Link as={Link} to="/login" onClick={handleSignOut}>
										 Sign Out 
								   </Nav.Link>
									
							
									</>
									
									:
									<Nav.Link as={Link} to="/login">
								Login
								</Nav.Link>
								
							}
							<Nav.Link as = {Link} to ="/blog">Blog</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;