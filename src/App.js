import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
	login,
	logout,
	selectUser,
} from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(
			(userAuth) => {
				if (userAuth) {
					//log in
					dispatch(
						login({
							uid: userAuth.uid,
							email: userAuth.email,
						})
					);
				} else {
					//log out
					dispatch(logout());
				}
			}
		); //react hook useEffect has a missing dependency: 'dispatch'

		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Routes>
						<Route
							exact
							path="/profile"
							element={<ProfileScreen />}
						/>
						<Route exact path="/" element={<HomeScreen />} />
					</Routes>
				)}
			</Router>
		</div>
	);
}
export default App;
