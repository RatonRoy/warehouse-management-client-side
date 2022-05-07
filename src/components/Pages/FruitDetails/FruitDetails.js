import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './FruitDetails.css';

const FruitDetails = () => {
	// to read the product id 
	const {InventoryId} = useParams()
	return (
		<div className='fruitDetails-container section-center'>
			this is the text coming from fruit details pages. 
			<h3> Product Id : {InventoryId} </h3>
			<div className='mx-auto bg-dark py-2 px-4 text-center  text-light w-25'>
			<Link to='/checkout'>
				
				Proceed fruit 
			
			</Link>
			</div>
		</div>
	);
};

export default FruitDetails;