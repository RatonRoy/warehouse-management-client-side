import React from 'react';
import './Stocks.css';
const Stocks = () => {
	return (
		
	<section className = "stocks-wrap">
		<h2 className = "stock-title"> Our Stocks  </h2>
		<div className = "section-center stockbar-wrap">
		
			<div className = "stock-container">
				<h4>Mango </h4>
				<div className = " stockbar-container">
					<div className = "stock mango">90%</div>
					{/* <div class="skills html">90%</div> */}
				</div>
			</div>
			<div className = "stock-container">
				<h4>Pineapple</h4>
				<div className = " stockbar-container">
					<div className = "stock Pineapple">85%</div>
				</div>
			</div>
			<div className = "stock-container">
				<h4>Watermelon</h4>
				<div className = " stockbar-container">
					<div className = "stock Watermelon">75%</div>
				</div>
			</div>
			<div className = "stock-container">
				<h4>Apple</h4>
				<div className = " stockbar-container">
					<div className = "stock Apple">60%</div>
				</div>
			</div>
			<div className = "stock-container">
				<h4> Jackfruit </h4>
				<div className = "stockbar-container">
					<div className = "stock Jackfruit">40%</div>
				</div>
			</div>
		
		</div>
	</section>
	
	);
};

export default Stocks;