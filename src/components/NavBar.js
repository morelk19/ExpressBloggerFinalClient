import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

const NavBar = () => {
	//we need this in the navbar, so that we can log out
	//instead of passing logout through props,
	// we are importing the useAuth which is Auth's 
	// contxt which allows us to call logout()
	const auth = useAuth();

	return (
		<div>
			<h3>{auth.userEmail && `Current User: ${auth.userEmail}`}</h3>
			<Link to="/">Home</Link>
			<Link to="/registration">Registration Form</Link>
			<Link to="/login">Login Form</Link>
			<button onClick={()=>{
				auth.logout()
			}}>Logout</button>
		</div>
	)
}

export default NavBar