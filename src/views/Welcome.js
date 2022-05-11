import React from "react";
import AuthenticationButton from "../components/auth-buttons/authentication-button";
import SignupButton from "../components/auth-buttons/signup-button";

function Welcome() {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="d-flex flex-column">
				<h1>Welcome</h1>
				<AuthenticationButton />
				<SignupButton />
			</div>
		</div>
	);
}

export default Welcome;
