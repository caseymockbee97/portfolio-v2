import React, { useContext } from "react";
import { projects } from "../Assets/ProjectInfo";
import ProfileImage from "../Assets/Images/ProfileImage.png";
import { NavContext } from "./NavContext";

export default function NavComponent() {
	const { activeLink, setActiveLink } = useContext(NavContext);
	const idNames = projects.map((project) => project.idName);

	return (
		<nav>
			<a aria-label="Home" href="#home" onClick={() => setActiveLink("home")}>
				<img
					aria-hidden
					src={ProfileImage}
					className="nav-image"
					alt="Cartoon Profile"
					width="2em"
				/>
			</a>
			<a href="#home" className={activeLink === "home" ? "active" : ""}>
				Home
			</a>
			<a href="#skills" className={activeLink === "skills" ? "active" : ""}>
				Skills
			</a>
			<a
				href="#projects"
				className={idNames.includes(activeLink) ? "active" : ""}
			>
				Projects
			</a>
			{projects.map((project) => (
				<a
					className={`sub-a${activeLink === project.idName ? " active" : ""}`}
					key={project.idName}
					href={`#${project.idName}`}
				>
					{project.title}
				</a>
			))}
			<a className={activeLink === "contact" ? "active" : ""} href="#contact">
				Contact
			</a>
		</nav>
	);
}
