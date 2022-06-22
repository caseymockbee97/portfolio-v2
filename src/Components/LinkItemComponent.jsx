import React from "react";

export default function LinkItemComponent(props) {
	let { loaded, title, index, icon, link } = props;

	return (
		<li
			className={`contact-container-list-item${
				loaded ? " loaded" : " not-loaded"
			}`}
			style={{ transitionDelay: index * 0.05 + "s" }}
		>
			<a
				target="_blank"
				rel="noreferrer"
				className="contact-container-list"
				href={link}
			>
				<div className="contact-container-list-link-container">
					{title} {icon}
				</div>
			</a>
		</li>
	);
}
