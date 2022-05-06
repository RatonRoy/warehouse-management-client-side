/* **************************
1. Create the .env file 
1.1 copy inside the firebaseConfig codes which remain in the firebase.init.js file. 
1.1 Replace : by = and remove the quotation and comma . 
1.3 add beginning of the every line REACT_APP_
1.4 it is look like [
	REACT_APP_apiKey=AIzaSyBXHi4lOwy_psckXilP3B5ar864Hzv82W8
	REACT_APP_authDomain=fruit-store-83c09.firebaseapp.com
	REACT_APP_projectId=fruit-store-83c09
	REACT_APP_storageBucket=fruit-store-83c09.appspot.com
	REACT_APP_messagingSenderId=1072827713037
	REACT_APP_appId=1:1072827713037:web:ea1b8c919c4dbae0e7b744
]

2. Modify the firebase.init.js 
2.1 Remove values of the keys 
2.2 After the colon beginning the process.env. 
2.2 copy the environment variables from the .env file and past the variables after the process.env. text. 
3.2 add comma end of each line. 
3 the file look like this [
	apiKey:process.env.REACT_APP_apiKey,
	authDomain:process.env.REACT_APP_authDomain,
	projectId:process.env.REACT_APP_projectId,
	storageBucket:process.env.REACT_APP_storageBucket,
	messagingSenderId:process.env.REACT_APP_messagingSenderId,
	appId:process.env.REACT_APP_appId,
]
*********************************/