import React from 'react';
import review1 from '../../../../img/review/review1.jpg'
import review2 from '../../../../img/review/review2.jpg'
import review3 from '../../../../img/review/review3.jpg'
import './Review.css';

const Review = () => {
	return (
		<section className='review-container'>
			<h2 className="review-title section-title">Our Reviews </h2>
			<div className='all-review  section-center'>
				{/* start of the single review  */}
				<div className='single-item'>
					<div className="img-container">
						<img src={review1} alt="" />
					</div>
					<div className="item-info">
						<h4 className="review-name">Sanjida  </h4>
						<p className="text">
							I know about fruit store very well. They always try to store fresh fruits.
						</p>
					</div>
				</div>
				{/* end of single review  */}
				{/* start of the single review  */}
				<div className='single-item'>
					<div className="img-container">
						<img src={review2} alt="" />
					</div>
					<div className="review-info">
						<h4 className="review-name"> Sohan   </h4>
						<p className="text">
							My experience was very good about fruit store. They are very supportive about their customers.
						</p>
					</div>
				</div>
				{/* end of single review  */}
				{/* start of the single review  */}
				<div className='single-item'>
					<div className="img-container">
						<img src={review3} alt="" />
					</div>
					<div className="review-info">
						<h4 className="review-name"> Helal   </h4>
						<p className="text">
							Their seasonal  fruits are very testy and delicious. I am happy with their fruits and always recommended fruit store.
						</p>
					</div>
				</div>
				{/* end of single review  */}
			</div>
		</section>
	);
};

export default Review;