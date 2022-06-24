import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import ListItemComponent from "../Components/ListItemComponent";

export default function ListLayout(props) {
	const { skills } = props;
	const [loaded, setLoaded] = useState(false);

	return (
		<InView
			as="ul"
			onChange={(inView, entry) => {
				if (inView) setLoaded(true);
			}}
			triggerOnce={true}
			threshold={0}
			className="list"
		>
			{skills.map((skill, i) => (
				<ListItemComponent
					key={skill}
					loaded={loaded}
					skill={skill}
					index={i}
				/>
			))}
		</InView>
	);
}
