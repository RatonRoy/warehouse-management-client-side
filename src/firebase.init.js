// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHi4lOwy_psckXilP3B5ar864Hzv82W8",
  authDomain: "fruit-store-83c09.firebaseapp.com",
  projectId: "fruit-store-83c09",
  storageBucket: "fruit-store-83c09.appspot.com",
  messagingSenderId: "1072827713037",
  appId: "1:1072827713037:web:ea1b8c919c4dbae0e7b744"
};
/* const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};
 */
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;