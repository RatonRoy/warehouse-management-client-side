import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import './SocialLogin.css';
const SocialLogin = () => {
	return (
		<section>
			<div className='d-flex align-items-center'>
				<div className='w-50 bg-success' style={{ height : '2px' }}></div>
				<h5 className='mt-1 px-2'>OR</h5>
				<div className='w-50 bg-success' style={{height : '2px'}}></div>
			</div>
			{/* <div className="button mx-auto">
				<button type="button" class="btn btn-success w-50 mx-auto">Google Login</button>
				
			</div> */}
			<div class="d-grid gap-2 col-6 mx-auto">
				<button class="btn btn-success py-2 button" type="button">
					<FcGoogle className='google-icon'></FcGoogle>
					Google Login</button>
				<button class="btn btn-success py-2  button " type="button">
					<BsGithub className = 'git-icon'></BsGithub>
					Github  Login </button>
			</div>
		</section>
	);
};

export default SocialLogin;