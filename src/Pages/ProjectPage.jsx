import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import ListLayout from "../Layouts/ListLayout";

export default function ProjectPage({ project, ...props }) {
	let { skills, title, image, liveLink, githubLink } = project;

	return (
		<div className="project-container">
			<h2 className="project-container-header">{title}</h2>
			<div className="project-container-links">
				{githubLink && (
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
				)}
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
			<ListLayout skills={skills} />
		</div>
	);
}
