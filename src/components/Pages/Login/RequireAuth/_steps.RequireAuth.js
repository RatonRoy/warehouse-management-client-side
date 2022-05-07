/* ******************
1. Create RequireAuth component 
1.1 pass {children } as a props of RequireAuth function and return the children 
1.2 Go to the useAuthState in the firebase  react hooks
1.3 Import [
	import { useAuthState } from 'react-firebase-hooks/auth';
]
1.4 collect the user [
	const [user] = useAuthState(auth);
]
1.5 import auth [
	import auth from '../../../../firebase.init';
]
2. set the navigation 
2.1 if user is not remain then use this formation or if condition [
	if(!user) {
	 // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

	 return <Navigate to="/login" state={{ from: location }} replace />;
	}
]
2.2 For save the current location use [
	let location = useLocation();
]


*************************/