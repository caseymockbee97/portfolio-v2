import React, { useContext } from "react";
import { NavContext } from "../Components/NavContext";

export default function LandingPage() {
	const { setActiveLink } = useContext(NavContext);

	return (
		<div
			onMouseEnter={() => setActiveLink("home")}
			id="home"
			className="landing"
		>
			<div className="landing-container">
				<h1 className="landing-container-header">Casey Mockbee</h1>
				<h2 className="landing-container-subheader">Full Stack Developer</h2>

				<h3 className="landing-container-location">📍 Indianapolis, IN</h3>
			</div>
		</div>
	);
}
