import React from 'react';
import './Fruit.css';

const Fruit = (props) => {
	
	const { name, img, price, description } = props.fruit;
	console.log(name, img, price);
	
	return (
		<section className='single-fruit'>
			<div className="img-container">
				<img src= {img} alt="" />
			</div>
			<article className="fruit-info">
				<div className="fruit-info-header">
					<h4 className="fruit-name">{name}</h4>
					<p className='fruit-price'> Price : {price}</p>
				</div>
				<div className="fruit-description">
					<p>
						{description}
					</p>
				</div>
				<div className="fruit-footer">
					
				</div>
			</article>
		</section>
	);
};

export default Fruit;