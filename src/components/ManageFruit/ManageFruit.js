import React from 'react';
import useFruits from '../Hooks/useFruit';

const ManageFruit = () => {
	const [fruits, setFruit] = useFruits();
	const handleDelet = (id) => {
		const proceed = window.confirm("Are you sure want to delete?")
		if (proceed) {
			const url = `http://localhost:5000/allinventory/${id}`;
			fetch((url), {
				method: 'DELETE'
				
			})
				.then(res => res.json())
				.then(result => {
					console.log(result);
					const remening = fruits.filter(fruit => fruit._id !== id) 
					setFruit(remening);
			
				} )
		}
	}
	return (
		<div className='mx-auto w-50'>
			<h1 className='text-center'>Manage Your Fruits </h1>
			{
				fruits.map(fruit => <div
					key={fruit._id}>
					<h3> {fruit.name} <span className='text-danger  px-3' style ={{cursor : 'pointer'}} onClick={() => handleDelet(fruit._id)}>X</span></h3>

				</div>)
			}
		</div>
	);
};

export default ManageFruit;