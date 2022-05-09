import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './FruitDetails.css';

const FruitDetails = () => {
	// to read the product id 
	const { InventoryId } = useParams()
	const [inventory, setInventory] = useState({});
	useEffect(() => {
		const url = `http://localhost:5000/allinventory/${InventoryId}`;
		fetch(url)
			.then(res => res.json())
			.then(data => setInventory(data))
	}, [])
	const {name, img, supplier, price, quantity,description, sold } = inventory;
	return (
		<section className="manage-container">
			<h1 className='manage-title'> Manage : {name} </h1>
			<div className="manage-fruit-wrapper">
				<div className="manage-fruit-img">
					<img src= {img} alt="" />
				</div>
				<article className="manage-fruit-info">
					<div className="manage-fruit-data">
						<div className="price-quantity">
							<p> Price :  {price}/kg  </p>
							<p> Quantity :  {quantity}kg  </p>
						</div>
						<div className="suppplier-sold">
							<p> Supplier : {supplier}</p>
							<p> Sold : {sold}kg </p>
						</div>
					</div>
					<div className="description">
						<p>
							{description}
						</p>
					</div>
					<div className="manage-fruit-btn-container">
						<button className='manage-fruit-btn'>
							Deliver Min 5Kg
						</button>
					</div>
				</article>
			</div>
		</section>
	);
};

export default FruitDetails;