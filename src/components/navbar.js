import React from "react";
import { NavLink } from "react-router-dom";

import AuthNav from "./auth-buttons/auth-nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBugSlash } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
	<div className="nav-container mb-3">
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<div className="container">
				<div className="navbar-nav mr-auto align-items-center">
					<NavLink to="/" exact="true" className="navbar-brand me-5 fs-4">
						<FontAwesomeIcon icon={faBugSlash} style={{ color: "FireBrick" }} /> Bug Tracker
					</NavLink>
					<NavLink
						to="/"
						exact="true"
						className={({ isActive }) => "nav-link" + (isActive ? "router-link-exact-active nav-link" : "")}
					>
						Dashboard
					</NavLink>
					<NavLink
						to="/profile"
						exact="true"
						className={({ isActive }) => "nav-link" + (isActive ? "router-link-exact-active nav-link" : "")}
					>
						Profile
					</NavLink>
					<NavLink
						to="/external-api"
						exact="true"
						className={({ isActive }) => "nav-link" + (isActive ? "router-link-exact-active nav-link" : "")}
					>
						External API
					</NavLink>
				</div>
				<AuthNav />
			</div>
		</nav>
	</div>
);

export default Navbar;
