import React from 'react';
import { useForm } from "react-hook-form";
const Addfruit = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => {
		const url = `http://localhost:5000/allinventory`;
		fetch((url), {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(result => console.log(result));

		
	}
	return (
		<div className='w-50 mx-auto'>
			<h1> Please Add Fruit </h1>
			<form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
				<input className='mb-3 p-1' placeholder='Fruit' {...register("name", { required: true, maxLength: 20 })} />
				<textarea className='mb-3 p-1' placeholder='description ' {...register("description")} />
				<input className='mb-3 p-1' placeholder=' price' type="number" {...register("price")} />
				<input className='mb-3 p-1' placeholder='provider' type="text" {...register("provider")} />
				<input className='mb-3 p-1' placeholder='Photo Url ' type="text" {...register("img")} />
				<input type="submit" value= 'Add Fruit' className='bg-success text-light b-none' />
			</form>
		</div>
	);
};

export default Addfruit;