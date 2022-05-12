import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Orders.css';


const Orders = () => {
	const [user] = useAuthState(auth);

	const [orders, setOrders] = useState([])
	useEffect(() => {
		const getOrders = async () => {
			const email = user.email;
	
			const url = `http://localhost:5000/orders?email=${email}`;
			const { data } = await axios.get(url);
			setOrders(data);
		}
		getOrders();

	}, [user])

	const deleteOrderItem = (id) => {
		const proceed = window.confirm('Are you sure want to remove?')
		if (proceed) {
			const url = `http://localhost:5000/orders/${id}`;
			console.log("delet id", id);
			fetch((url), {
				method: 'DELETE'

			})
				.then(res => res.json())
				.then(deleteOrder => {
					console.log(deleteOrder);
					if (deleteOrder.deletedCount > 0) {
						console.log("delete success");
						const remainingOrder = orders.filter(order => order._id !== id)
						setOrders(remainingOrder);
					}

				})
		}
	}

	return (
		<div className='order-container'>
			<h2 className='orders-name'>Your Orders : {orders.length}</h2>

			{
				orders.map(order => <div key={order._id}>
					<div className='orders'>
						<div className="single-order">
							<h3> {order.fruit} </h3>
							<p>
								<button className='order-remove-btn' onClick={() => deleteOrderItem(order._id)}> Remove </button>
							</p>
						</div>
					</div>




					
				</div>)
			}
			
		</div>
	);
};

export default Orders;