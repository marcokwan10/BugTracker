import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedComponent from "./auth/protected-component";

import Welcome from "./views/Welcome";
import Loading from "./components/loading";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalAPI";
import Navbar from "./components/navbar";

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
			<Navbar />
			<Routes>
				<Route path="/profile" element={<ProtectedComponent component={Profile} />} />
				<Route path="/external-api" element={<ProtectedComponent component={ExternalApi} />} />
			</Routes>
		</div>
	);
}

export default App;
