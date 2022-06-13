import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
// AiFillLinkedin

export default function ProjectPage(props) {
	let { skills, title, idName, image, liveLink, githubLink } = props.project;
	return (
		<div id={idName} className="project alternate-theme">
			<div className="project-container">
				<h1 className="project-container-header">{title}</h1>
				<div className="project-container-links">
					<a
						target="_blank"
						rel="noreferrer"
						className="project-container-links-link"
						href={githubLink}
					>
						<div className="project-container-links-link-container">
							<span>GitHub </span>
							<AiFillGithub />
						</div>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						className="project-container-links-link"
						href={liveLink}
					>
						<div className="project-container-links-link-container">
							<span>Deployed </span>
							<AiOutlineLink />
						</div>
					</a>
				</div>
				<img
					className="project-container-image"
					src={image}
					alt={`screenshot of ${title}`}
				/>
				<ul className="project-container-list">
					{skills.map((skill) => (
						<li key={skill} className="project-container-list-item">
							{skill}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
