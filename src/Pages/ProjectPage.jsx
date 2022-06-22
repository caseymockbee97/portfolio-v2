import React, { useContext, useState } from "react";
import { NavContext } from "../Components/NavContext";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { InView } from "react-intersection-observer";
import ListItemComponent from "../Components/ListItemComponent";

export default function ProjectPage(props) {
	let { skills, title, idName, image, liveLink, githubLink } = props.project;
	const { setActiveLink } = useContext(NavContext);
	const [loaded, setLoaded] = useState(false);

	return (
		<div className="project-background">
			<InView
				as="div"
				onChange={(inView, entry) => {
					if (inView) {
						setActiveLink(idName);
					}
					if (inView && !loaded) setLoaded(true);
				}}
				threshold={0.5}
				id={idName}
				className="project"
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
						{skills.map((skill, i) => (
							<ListItemComponent
								key={skill}
								loaded={loaded}
								skill={skill}
								classNameProp="project-container-list-item"
								index={i}
							/>
						))}
					</ul>
				</div>
			</InView>
		</div>
	);
}
