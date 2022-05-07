/* *********************
1. style of the login pages 
1.1 First copy past the html from form the react bootstrap 
1.2 Give the style according to vanilla bootstrap.
1.3. 

2. Collect the input value 
2.1. Use the useRef() hooks. 
2.2. Declare a variable like reference [
	const emailRef = useRef('initial value');
]
2.3. Pass this reference value to the input field [
	<input ref = {emilRef} type : 'email'/>. If you do not give that the useRef('') hooks not working properly. 
]
2.4. Get the input value [
	const emailValue = emailRef.current.value
]
3. Redirect to the login pages 
3.1 First set the location [
		const location = useLocation();
]
3.2 Where come from [
	let from = location.state?.from?.pathname || "/";
]
3.3 use the navigation if the user remains [
	if (user) {
		navigate(from, { replace: true });
	}
]
************************/