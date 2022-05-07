/* *******************************
1. create a new user 
1.2. first import the file at the top  [
	import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
]
1.3 Destructuring under the Register function like this [
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useCreateUserWithEmailAndPassword(auth);
]
1.4 import the the auth from firebase.init.js file. 
1.4 add [createUserWithEmailAndPassword(email, password)] to the  handleRegisterFrom function 
2 use navigate if user is remain to the home pages [
	if (user) {
	navigate('/');
	}
]
**************************/