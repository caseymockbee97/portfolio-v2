import React, { useContext, useState } from "react";
import { NavContext } from "../Components/NavContext";
import {
	AiFillFilePdf,
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineMail,
} from "react-icons/ai";
import { projects } from "../Assets/ProjectInfo";
import SendEmailComponent from "../Components/SendEmailComponent";
import { InView } from "react-intersection-observer";
import LinkItemComponent from "../Components/LinkItemComponent";

export default function ContactMePage() {
	const isEven = projects.length % 2 === 0;
	const { setActiveLink } = useContext(NavContext);
	const [loaded, setLoaded] = useState(false);

	return (
		<InView
			as="div"
			onChange={(inView, entry) => {
				if (inView) {
					setActiveLink("contact");
				}
				if (inView && !loaded) setLoaded(true);
			}}
			threshold={0.3}
			id="contact"
			className={`contact ${isEven ? "even" : "odd"}`}
		>
			<div className="contact-container">
				<h1 className="contact-container-header">Contact Me</h1>
				<SendEmailComponent />
				<ul className="contact-container-list">
					<LinkItemComponent
						loaded={loaded}
						title={"GitHub"}
						index={0}
						icon={<AiFillGithub />}
						link={"https://github.com/caseymockbee97"}
					/>
					<LinkItemComponent
						loaded={loaded}
						title={"LinkedIn"}
						index={1}
						icon={<AiFillLinkedin />}
						link={"https://www.linkedin.com/in/casey-mockbee/"}
					/>
					<LinkItemComponent
						loaded={loaded}
						title={"View Resume"}
						index={2}
						icon={<AiFillFilePdf />}
						link={`${process.env.PUBLIC_URL}/CaseyMockbeeResume.pdf`}
					/>
					<LinkItemComponent
						loaded={loaded}
						title={"Email"}
						index={3}
						icon={<AiOutlineMail />}
						link="mailto: caseymockbee97@gmail.com"
					/>
				</ul>
			</div>
		</InView>
	);
}
