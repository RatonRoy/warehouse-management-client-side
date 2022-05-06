import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<header>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand as = {Link} to ="/">Fruit Store</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link  href="home#inventory" >Inventory</Nav.Link>
							<Nav.Link as={Link} to="#">Item
							</Nav.Link>
							
						</Nav>
						<Nav>
							<Nav.Link as = {Link} to ="/blog">Blog</Nav.Link>
							<Nav.Link href='home#contact'>Contact</Nav.Link>
							<Nav.Link eventKey={2} as = {Link} to = "/login">
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;