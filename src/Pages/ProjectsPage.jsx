import React from "react";
import ProjectPage from "./ProjectPage";
import { projects } from "../Assets/ProjectInfo";
import ContainerLayout from "../Layouts/ContainerLayout";

export default function ProjectsPage() {
	return (
		<div id="projects">
			{projects.map((project, i) => (
				<ContainerLayout
					idName={project.idName}
					key={project.idName}
					isDarkTheme={i % 2 === 0}
				>
					<ProjectPage project={project} />
				</ContainerLayout>
			))}
		</div>
	);
}
