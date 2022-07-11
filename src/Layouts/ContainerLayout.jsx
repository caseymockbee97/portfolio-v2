import React, { useContext } from "react";
import { NavContext } from "../Components/NavContext";

import { InView } from "react-intersection-observer";

export default function ContainerLayout({
	children,
	isDarkTheme = true,
	isTop = false,
	idName,
	noStyle = false,
	onlyStyle = false,
}) {
	const { setActiveLink } = useContext(NavContext);

	return (
		<InView
			as="div"
			id={idName}
			onChange={(inView, entry) => {
				if (inView && !onlyStyle) setActiveLink(idName);
			}}
			threshold={0.3}
			className={noStyle ? "" : `container-${isDarkTheme ? "dark" : "light"}`}
		>
			<div className={noStyle ? "" : `${isTop ? "top" : "main"}`}>
				{children}
			</div>
		</InView>
	);
}
