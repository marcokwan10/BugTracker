import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import AuthNav from "./components/auth-buttons/AuthNav";
import SignupButton from "./components/auth-buttons/SignupButton";
import Loading from "./components/Loading";

function App() {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="App">
			<h1>Auth0</h1>
			<AuthNav />
			<SignupButton />
		</div>
	);
}

export default App;
