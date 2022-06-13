import React from "react";
import ProjectPage from "./ProjectPage";
import { projects } from "../Assets/ProjectInfo";

export default function ProjectsPage() {
	return (
		<div id="projects">
			{projects.map((project) => (
				<ProjectPage key={project.idName} project={project} />
			))}
		</div>
	);
}
