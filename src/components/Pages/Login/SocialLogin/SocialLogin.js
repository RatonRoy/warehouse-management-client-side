import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
	const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
	// Github login 
	const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
	// Redirect to  the login page
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";
	
	const navigate = useNavigate();
	if (googleUser || githubUser) {
		navigate(from, { replace: true });
	}

	let errorMassege; 

	if (googleError || githubError) {
		
		  errorMassege = <div>
			  <p className='text-danger'>Error: {googleError?.message}
			  {githubError?.message}
			  </p>
		  </div>
	}
	
	return (
		<section>
			{errorMassege}
			<div className='d-flex align-items-center'>
				<div className='w-50 bg-success' style={{ height : '2px' }}></div>
				<h5 className='mt-1 px-2'>OR</h5>
				<div className='w-50 bg-success' style={{height : '2px'}}></div>
			</div>
			<div class="d-grid gap-2 col-6 mx-auto">
				<button class="btn btn-success py-2 button"
					onClick={() => signInWithGoogle()}
					type="button">
					<FcGoogle className='google-icon'></FcGoogle>
					Google Login</button>
				<button class="btn btn-success py-2  button "
						onClick={() => signInWithGithub()}
					type="button">
					<BsGithub className = 'git-icon'></BsGithub>
					Github  Login </button>
			</div>
		</section>
	);
};

export default SocialLogin;