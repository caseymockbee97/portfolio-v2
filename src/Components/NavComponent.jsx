import React from "react";

export default function NavComponent() {
	return (
		<nav>
			<a href="#home">Home</a>
			<a href="#skills">Skills</a>
			<a href="#projects">Projects</a>
			<a className="sub-a" href="#indy-food">
				Indy Food
			</a>
			<a className="sub-a" href="#spacetagram">
				Spacetagram
			</a>
			<a className="sub-a" href="#get-it-done">
				GetItDone.js
			</a>
			<a href="#contact-me">Contact Me</a>
		</nav>
	);
}
