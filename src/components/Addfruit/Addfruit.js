import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Addfruit = () => {
	const { register, handleSubmit } = useForm();
	let navigate = useNavigate();
	const onSubmit = data => {
		const url = `https://safe-hamlet-12951.herokuapp.com/allinventory`;
		fetch((url), {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(result => console.log(result));

		
		navigate('/allinventory');
	}
	return (
		<div className='w-50 mx-auto'>
			<h1> Please Add Fruit </h1>
			<form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
				<input className='mb-3 p-1' placeholder='Fruit' {...register("name", { required: true, maxLength: 20 })} />
				<textarea className='mb-3 p-1' placeholder='description ' {...register("description")} />
				<input className='mb-3 p-1' placeholder=' price' type="number" {...register("price")} />
				
				<input className='mb-3 p-1' placeholder='Photo Url ' type="text" {...register("img")} />
				<input className='mb-3 p-1' placeholder='Supplier' type="text" {...register("supplier")} />
				<input className='mb-3 p-1' placeholder='Quantity ' type="number" {...register("quantity")} />
				<input type="submit" value= 'Add Fruit' className='add-fruit-btn'/>
				{/* <input type="submit" value= 'Add Fruit' className='bg-success text-light add-fruit-btn' /> */}
			</form>
		</div>
	);
};

export default Addfruit;
