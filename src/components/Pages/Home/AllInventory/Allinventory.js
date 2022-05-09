import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fruit from '../Fruit/Fruit';
import './Allinventory.css';

const Allinventory = () => {
	const [fruits, setFruit] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/allinventory')
			.then(res => res.json())
			.then(data => setFruit(data));
	}, [])
	return (
		<div>
			
			<section id='inventory' className='container'>
			<h1 className='section-title'> Inventory  </h1>
			<div className="fruits-container section-center">
				
					{
						fruits.map(fruit => <Fruit
							key={fruit._id} fruit={fruit}
	
						>
	
						</Fruit>)
				}
				</div>
				<Link to = '/addfruit' className='add-fruit-btn'> Add A New Fruit </Link>
		</section>
		</div>
	);
};

export default Allinventory;
