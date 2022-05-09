import React from 'react';


import './Home.css';
import Inventory from './Inventory/Inventory';
import Stocks from './Stocks/Stocks';

const Home = () => {
	/* const [users, setUser] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/user')
			.then(res => res.json())
			.then(data => setUser(data));
	}, []) */

	/* const handledeleteUser = (id) => {

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

	} */
	
	return (
		<section>
			
			{/* End of the navbar  */}
			<div className="banner">
				<article className="banner-info">
					<h3>Lorem ipsum dolor sit amet.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo iste illo voluptate laboriosam delectus deleniti at assumenda voluptas ducimus.
					</p>
				</article>
			</div>
			{/* end of the banner sections  */}
			
			<Inventory></Inventory>
			{/* end of inventory section */}
			<Stocks></Stocks>










			{/* <h3> Total Users : {users.length} </h3>
			{
				users.map(user => <li
					key={user._id}
				> {user.name}  and  {user.email}
					<Link to={`/update/${user._id}`}><button> Update </button></Link>
					<button onClick={() => handledeleteUser(user._id)}>X</button>
				</li>)
			} */}
		</section>
	);
};

export default Home;