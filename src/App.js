import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedComponent from "./auth/protected-component";

import AuthNav from "./components/auth-buttons/auth-nav";
import Welcome from "./views/Welcome";
import Loading from "./components/loading";
import Profile from "./views/Profile";
import AuthenticationButton from "./components/auth-buttons/authentication-button";

function App() {
	const { isLoading, isAuthenticated } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	if (!isAuthenticated) {
		return <Welcome />;
	}

	return (
		<div className="App">
			<h1>Auth0</h1>
			<Routes>
				<Route path="/profile" element={<ProtectedComponent component={Profile} />} />
			</Routes>
		</div>
	);
}

export default App;
