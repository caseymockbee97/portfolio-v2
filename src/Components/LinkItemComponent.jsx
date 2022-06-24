import React from "react";

export default function LinkItemComponent(props) {
	let { loaded, title, index, icon, link } = props;

	return (
		<li
			className={`list-link ${loaded ? "loaded" : "not-loaded"}`}
			style={{ transitionDelay: index * 0.05 + "s" }}
		>
			<a target="_blank" rel="noreferrer" className="list-link-a" href={link}>
				<div className="list-link-container">
					{title} {icon}
				</div>
			</a>
		</li>
	);
}
