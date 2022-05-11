import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Orders.css';

const Orders = () => {
	const [user] = useAuthState(auth);
	const [orders, setOrders] = useState([])
	console.log(orders);

	useEffect(() => {
		const getOrders = async () => {
			const email = user.email;
			const url = `http://localhost:5000/order`;
			// const url = `http://localhost:5000/order?email=${email}`;
			const { data } = await axios.get(url);
			setOrders(data);
		}
		getOrders();
		
}, [orders])


	return (
		<div className='order'>
			<h2>Your Orders : {orders.length}</h2>
			{
				orders.map(order => <h2> Name {order.name} </h2>)
			}
		</div>
	);
};

export default Orders;