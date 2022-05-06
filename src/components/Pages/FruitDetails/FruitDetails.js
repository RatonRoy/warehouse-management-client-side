import React from 'react';
import { useParams } from 'react-router-dom';
import './FruitDetails.css';

const FruitDetails = () => {
	// to read the product id 
	const {InventoryId} = useParams()
	return (
		<div className='fruitDetails-container'>
			this is the text coming from fruit details pages. 
			<h3> Product Id : {InventoryId } </h3>
		</div>
	);
};

export default FruitDetails;