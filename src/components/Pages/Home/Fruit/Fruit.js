import React from 'react';
import {useNavigate} from "react-router-dom";
import './Fruit.css';

const Fruit = (props) => {

	const { name, img, price, description, quantity, supplier, _id } = props.fruit;

	let navigate = useNavigate();

	const navigateTomanageFruit = (id) => {
		navigate(`/inventory/${id}`);
	}

	return (
		<section className='single-item'>
			<div className="img-container">
				<img src={img} alt="" />
			</div>
			<article className="item-info">
				<div className="fruit-info-header">
					<div className="name-price">
						<h4 className="fruit-name">{name}</h4>
						<p className='fruit-price'> Price : {price}</p>
					</div>
					<div className="quantity-supplier">
						<p> Supplier : {supplier} </p>
						<p>Quantity : { quantity } kg </p>
					</div>
				</div>
				<div className="fruit-description">
					<p>
						{description}
					</p>
				</div>
				<div className="fruit-footer">
					<p>
						<button className='fruit-btn' onClick={() => navigateTomanageFruit(_id)}>Manage {name} </button>
					</p>
					<p>
						<button className="fruit-btn-one">Remove Fruit </button>
					</p>
				</div>
			</article>
		</section>
	);
};

export default Fruit;