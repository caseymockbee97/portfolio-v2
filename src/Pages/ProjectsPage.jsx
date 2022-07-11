import React from "react";
import ProjectPage from "./ProjectPage";
import { projects } from "../Assets/ProjectInfo";
import ContainerLayout from "../Layouts/ContainerLayout";

export default function ProjectsPage() {
	return (
		<div className="projects" id="projects">
			<h1 className="projects-header">Projects</h1>
			{projects.map((project, i) => (
				<ContainerLayout noStyle key={project.idName} idName={project.idName}>
					<ProjectPage project={project} />
				</ContainerLayout>
			))}
		</div>
	);
}
