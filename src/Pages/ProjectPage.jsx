import React, { useContext } from "react";
import { NavContext } from "../Components/NavContext";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { InView } from "react-intersection-observer";

export default function ProjectPage(props) {
	let { skills, title, idName, image, liveLink, githubLink } = props.project;
	const { setActiveLink } = useContext(NavContext);
	return (
		<InView
			as="div"
			onChange={(inView, entry) => {
				if (inView) {
					setActiveLink(idName);
				}
			}}
			threshold={0.3}
			id={idName}
			className="project alternate-theme"
		>
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
		</InView>
	);
}
