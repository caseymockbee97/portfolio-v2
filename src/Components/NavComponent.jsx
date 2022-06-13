import React from "react";
import { projects } from "../Assets/ProjectInfo";

export default function NavComponent() {
	return (
		<nav>
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
