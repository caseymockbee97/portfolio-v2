import React from "react";

export default function ListItemComponent(props) {
	let { loaded, classNameProp, skill, index } = props;
	return (
		<li
			className={`${classNameProp}${loaded ? " loaded" : " not-loaded"}`}
			style={{ transitionDelay: index * 0.05 + "s" }}
		>
			{skill}
		</li>
	);
}
