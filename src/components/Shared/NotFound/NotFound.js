import React from 'react';
import error from '../../../img/error-404.jpg';
import './NotFound.css';

const NotFound = () => {
	return (
		<div className='notfound-container'>
			<div className="error-img-container">
				<img src= {error} alt="" />
		  </div>
		</div>
	);
};

export default NotFound;