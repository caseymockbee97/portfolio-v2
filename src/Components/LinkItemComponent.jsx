import { useState } from "react";

export default function LinkItemComponent(props) {
	let { loaded, title, index, icon, link } = props;

	const [isActive, setIsActive] = useState(false);

	const handleFocus = () => setIsActive(true);
	const handleBlur = () => setIsActive(false);

	return (
		<li
			className={`list-link ${loaded ? "loaded" : "not-loaded"} ${
				isActive ? "active" : ""
			}`}
			style={{ transitionDelay: index * 0.05 + "s" }}
		>
			<a
				target="_blank"
				rel="noreferrer"
				className="list-link-a"
				href={link}
				onFocus={handleFocus}
				onBlur={handleBlur}
			>
				<div className="list-link-container">
					{title} {icon}
				</div>
			</a>
		</li>
	);
}
