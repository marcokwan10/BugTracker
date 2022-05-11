import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/loading";

const ProtectedComponent = ({ component, ...args }) => {
	const Component = withAuthenticationRequired(component, {
		onRedirecting: () => <Loading />,
	});
	return <Component />;
};

export default ProtectedComponent;
