import React from "react";
import { projects } from "../Assets/ProjectInfo";
import ProfileImage from "../Assets/Images/ProfileImage.png";

export default function NavComponent() {
	return (
		<nav>
			<img
				aria-hidden
				src={ProfileImage}
				className="nav-image"
				alt="Cartoon Profile"
			/>
			<a href="#home">Home</a>
			<a href="#skills">Skills</a>
			<a href="#projects">Projects</a>
			{projects.map((project) => (
				<a key={project.idName} className="sub-a" href={`#${project.idName}`}>
					{project.title}
				</a>
			))}
			<a href="#contact-me">Contact Me</a>
		</nav>
	);
}
