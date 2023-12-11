import React from "react";
import ListLayout from "../Layouts/ListLayout";

export default function SkillsPage() {
	const skills = [
		"Typescript",
		"Javascript",
		"Neo4j",
		"Redis",
		"GCP",
		"Python",
		"SQL & PL/SQL",
		"Git",
		"HTML5",
		"CSS",
		"SASS",
		"Node JS",
		"React JS",
		"Django",
		"Redwood JS",
		"Material UI",
		"Figma",
		"VS Code",
		"Storybook",
	];

	return (
		<div className="skills-container">
			<h1 className="skills-container-header">Technical Skills</h1>
			<ListLayout skills={skills} />
		</div>
	);
}
