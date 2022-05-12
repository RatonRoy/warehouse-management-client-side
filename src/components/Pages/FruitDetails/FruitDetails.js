import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../../Hooks/useInventoryDetail';
import './FruitDetails.css';


const FruitDetails = () => {
	const { InventoryId } = useParams()
	const [inventory, setInventory] = useInventoryDetail(InventoryId);
	let { name, img, supplier, price, quantity, description, sold } = inventory;
	// update Info 
	const handleUpdatefruit = () =>{
		quantity = quantity + 5;
        

        const updatedQuantity = {quantity};
       

        // send data to the server
        const url = `http://localhost:5000/allinventory/${InventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data, updatedQuantity);
			alert('fruit added successfully!!!');
			setInventory(data)
           
        })
    }
	// end of update info 
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
						<button className='manage-fruit-btn' onClick={handleUpdatefruit}>
							Deliver Min 5Kg
						</button>
						<Link className='manage-fruit-btn' to = {`/checkout/${InventoryId}`}>
							Place Order  
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
};

export default FruitDetails;