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
************************/