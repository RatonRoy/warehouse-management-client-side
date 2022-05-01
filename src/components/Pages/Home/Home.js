import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
	const [users, setUser] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/user')
			.then(res => res.json())
			.then(data => setUser(data));
	}, [])

	const handledeleteUser = (id) => {

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

	}
	return (
		<section className="section-center">
			<h3> Total Users : {users.length} </h3>
			{
				users.map(user => <li
					key={user._id}
				> {user.name}  and  {user.email}
					<Link to={`/update/${user._id}`}><button> Update </button></Link>
					<button onClick={() => handledeleteUser(user._id)}>X</button>
				</li>)
			}
		</section>
	);
};

export default Home;