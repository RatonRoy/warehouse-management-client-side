/* ********************************
* How to use dynamics navigation. 
1. set a route.
2. the route have a dynamic part which start the : [
	<Route path = {/products/:productId} element = {<ProductDetails> </ProductDetails>}> </Route>
	here :productId is like a variable which value become after /products/ value. 
]
3. useNavigate() use to select the dynamic go navigation after clicking 
[
	let navigate = useNavigate();

]
4. onClick event pass this value [
	const onclickEvent = (id) => {
	  navigate(`/products/${id}`);
	}	
]
5. For read the id values 
5.1 . Go to the ProductDetails components.
5.2. Use the useParams() Hooks [
	const {productId} = useParams();
	make sure the your product id name must be similar of you dynamics route name. otherwise it is not working.
]
5.3. Then Use the productId as your need.
*************************************/