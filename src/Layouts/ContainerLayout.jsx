import React, { useContext } from "react";
import { NavContext } from "../Components/NavContext";

import { InView } from "react-intersection-observer";

export default function ContainerLayout(props) {
	const { setActiveLink } = useContext(NavContext);

	const { children, isDarkTheme = true, isTop = false, idName } = props;
	return (
		<InView
			as="div"
			id={idName}
			onChange={(inView, entry) => {
				if (inView) setActiveLink(idName);
			}}
			threshold={0.3}
			className={`container-${isDarkTheme ? "dark" : "light"}`}
		>
			<div className={`${isTop ? "top" : "main"}`}>{children}</div>
		</InView>
	);
}
