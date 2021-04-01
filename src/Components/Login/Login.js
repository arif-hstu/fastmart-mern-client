import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'
import firebase from 'firebase';
import 'firebase/auth'
import './Login.css'
import logo from '../../images/logo.png'

function Login() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	
	// const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;
	// firebase initialization and functionality
	if (!firebase.apps.length) {
		firebase.initializeApp({
			apiKey: "AIzaSyB83kYnTsPAP5sz-2N2d9csJIo5j07XMbg",
			authDomain: "fast-mart.firebaseapp.com",
			projectId: "fast-mart",
			storageBucket: "fast-mart.appspot.com",
			messagingSenderId: "946711079173",
			appId: "1:946711079173:web:c2a53547738d144ae36f6c"
		});
	} else {
		firebase.app();
	}
	const provider = new firebase.auth.GoogleAuthProvider();

	const handleGoogleLogin = () => {
		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				console.log(user);

				// store user info in loggedInUser state 
				const newUserInfo = {...loggedInUser};
				newUserInfo.displayName = user.displayName;
				newUserInfo.email = user.email;
				setLoggedInUser(newUserInfo);

				// ...
			}).catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});

			console.log(loggedInUser, 'from loginjs')
	}

	return (
		<>
			{
				!loggedIn &&
				<div className='Login'>
					<div className="logoHolder">
						<Link to='/'><img src={logo} alt="" /></Link>
					</div>
					<div className='registerHolder'>
						<h4>Register and Explore!</h4>
						<button onClick={handleGoogleLogin}>Register</button>
						<p>Already registered?<span onClick={() => setLoggedIn(true)}> Login </span>here</p>
					</div>
				</div>
			}

			{
				loggedIn &&
				<div className='Login'>
					<div className="logoHolder">
						<Link to='/'><img src={logo} alt="" /></Link>
					</div>
					<div className='registerHolder'>
						<h4>Login and Enjoy!</h4>
						<button onClick={handleGoogleLogin}>Login</button>
						<p>Not registered?<span onClick={() => setLoggedIn(false)}> Registration </span>here</p>
					</div>
				</div>
			}
		</>
	)
}

export default Login