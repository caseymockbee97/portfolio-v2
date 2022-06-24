import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import LinkItemComponent from "../Components/LinkItemComponent";

export default function LinkLayout(props) {
	const { links } = props;
	const [loaded, setLoaded] = useState(false);

	return (
		<InView
			as="ul"
			onChange={(inView, entry) => {
				if (inView) setLoaded(true);
			}}
			triggerOnce={true}
			threshold={0}
			className={"list"}
		>
			{links.map((item, i) => (
				<LinkItemComponent
					loaded={loaded}
					title={item.title}
					index={i}
					icon={item.icon}
					link={item.link}
					key={item.title}
				/>
			))}
		</InView>
	);
}
