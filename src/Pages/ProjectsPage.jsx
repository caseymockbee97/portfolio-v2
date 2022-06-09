import React from "react";
import ProjectPage from "./ProjectPage";

import IndyFoodImage from "../Assets/Images/Indy-Food.png";
import SpacetagramImage from "../Assets/Images/Spacetagram.png";

export default function ProjectsPage() {
	return (
		<div id="projects">
			<ProjectPage
				project={{
					title: "Indy Food",
					image: IndyFoodImage,
					skills: [
						"React JS",
						"Redwood JS",
						"Javascript",
						"HTML",
						"Git",
						"SASS",
						"GraphQL",
						"Figma",
						"Netlify",
						"Storybook",
					],
					description: "",
					liveLink: "https://vocal-liger-00206f.netlify.app/",
					githubLink: "https://github.com/caseymockbee97/indy-food-blog",
				}}
			/>
			<ProjectPage
				project={{
					title: "Spacetagram",
					image: SpacetagramImage,
					skills: [
						"React JS",
						"Material UI",
						"Javascript",
						"HTML",
						"Git",
						"CSS",
						"Figma",
						"Affinity Designer",
						"Github Pages",
					],
					description: "",
					liveLink: "https://caseymockbee97.github.io/spacetagram/",
					githubLink: "https://github.com/caseymockbee97/spacetagram",
				}}
			/>
		</div>
	);
}
