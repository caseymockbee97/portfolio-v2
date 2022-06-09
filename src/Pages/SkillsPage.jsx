import React from "react";

export default function SkillsPage() {
	const skills = [
		"Javascript",
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
		<div id="skills" className="skills">
			<div className="skills-container">
				<h1 className="skills-container-header">Technical Skills</h1>
				<ul className="skills-container-list">
					{skills.map((skill) => (
						<li key={skill} className="skills-container-list-item">
							{skill}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
