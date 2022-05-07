/* ********************
1. Add dynamics items to the navbar 
1.1 First get the user by this line [
	const [user] = useAuthState(auth);
]
1.2 Use ternary operator for set condition [
	{
	user ? true case : false case 
	}
]

2. Manage sign Out by this formation 
2.1 declare  a onClick Event to the sign out Link [
	 <Nav.Link as={Link} to="/login" onClick={handleSignOut}>
								 Sign Out 
								</Nav.Link>
]
2.2 use the signOut method to handleSignOut function [
	const handleSignOut = () => {
		signOut(auth);
	}
]

***************************/