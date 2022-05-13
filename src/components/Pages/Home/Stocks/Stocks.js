import React from 'react';
import './Stocks.css';
const Stocks = () => {
	return (

		<section className="stocks-wrap">
			<h2 className="stock-title"> Our Stocks  </h2>
			<div className="section-center stockbar-wrap">
				<div className="stock-container">
					<h4>Watermelon</h4>
					<div className="stockbar-container">
						<div className="stock Watermelon">5%</div>
					</div>
				</div>
				{/* end watermelon  */}

				<div className="stock-container">
					<h4>Pineapple</h4>
					<div className=" stockbar-container">
						<div className="stock Pineapple">8%</div>
					</div>
				</div>
				<div className="stock-container">
					<h4>Apple</h4>
					<div className=" stockbar-container">
						<div className="stock Apple">12%</div>
					</div>
				</div>
				<div className="stock-container">
					<h4> Jackfruit </h4>
					<div className="stockbar-container">
						<div className="stock Jackfruit">10%</div>
					</div>
				</div>
				<div className="stock-container">
					<h4> Abroad  fruits </h4>
					<div className="stockbar-container">
						<div className="stock abroad-fruits">15%</div>
					</div>
				</div>
				{/* end  */}

				<div className="stock-container">
					<h4>Mango </h4>
					<div className=" stockbar-container">
						<div className="stock mango">18%</div>
					</div>
				</div>
				<div className="stock-container">
					<h4> seasonal fruits </h4>
					<div className="stockbar-container">
						<div className="stock seasonal-fruits">32%</div>
					</div>
				</div>

			</div>
		</section>

	);
};

export default Stocks;