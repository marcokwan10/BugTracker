import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Auth0ProviderWithHistory>
			<App />
		</Auth0ProviderWithHistory>
	</Router>
);
