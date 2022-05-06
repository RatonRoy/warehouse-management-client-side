import React from 'react';
import { useEffect, useState } from 'react';
import Fruit from '../Fruit/Fruit';
import './Inventory.css';

const Inventory = () => {
	const [fruits, setFruit] = useState([]);
	useEffect(() => {
		fetch('fruits.json')
			.then(res => res.json())
			.then(data => setFruit(data));
	}, [])
	return (
		<section id = 'inventory'>
			<h1 className='section-title'> Inventory  </h1>
			<div className="fruits-container section-center">
				{
					fruits.map(fruit => <Fruit
					 key = {fruit._id} fruit = {fruit}
					
					>

					</Fruit>)
				}
			</div>
		</section>
	);
};

export default Inventory;