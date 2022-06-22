import React, { useContext, useState } from "react";
import { NavContext } from "../Components/NavContext";
import { InView } from "react-intersection-observer";
import ListItemComponent from "../Components/ListItemComponent";

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
		"Lighthouse",
	];
	const [loaded, setLoaded] = useState(false);

	const { setActiveLink } = useContext(NavContext);

	return (
		<div className="skills-background">
			<InView
				as="div"
				onChange={(inView, entry) => {
					if (inView) setActiveLink("skills");
					if (inView && !loaded) setLoaded(inView);
				}}
				threshold={0.5}
				id="skills"
				className="skills"
			>
				<div className="skills-container">
					<h1 className="skills-container-header">Technical Skills</h1>
					<ul className="skills-container-list">
						{skills.map((skill, i) => (
							<ListItemComponent
								key={skill}
								loaded={loaded}
								skill={skill}
								classNameProp="skills-container-list-item"
								index={i}
							/>
						))}
					</ul>
				</div>
			</InView>
		</div>
	);
}
