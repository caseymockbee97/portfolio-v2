import React from "react";

export default function ListItemComponent(props) {
	const { loaded, skill, index } = props;
	return (
		<li
			className={`list-item ${loaded ? "loaded" : "not-loaded"}`}
			style={{ transitionDelay: index * 0.05 + "s" }}
		>
			{skill}
		</li>
	);
}
