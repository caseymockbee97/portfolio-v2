import React from "react";
import {
	AiFillFilePdf,
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineMail,
} from "react-icons/ai";
import SendEmailComponent from "../Components/SendEmailComponent";
import LinkLayout from "../Layouts/LinkLayout";

export default function ContactMePage() {
	const links = [
		{
			title: "GitHub",
			icon: <AiFillGithub />,
			link: "https://github.com/caseymockbee97",
		},
		{
			title: "LinkedIn",
			icon: <AiFillLinkedin />,
			link: "https://www.linkedin.com/in/casey-mockbee/",
		},
		{
			title: "View Resume",
			icon: <AiFillFilePdf />,
			link: `${process.env.PUBLIC_URL}/CaseyMockbeeResume.pdf`,
		},
		{
			title: "Email",
			icon: <AiOutlineMail />,
			link: "mailto: caseymockbee97@gmail.com",
		},
	];

	return (
		<div className="contact-container">
			<h1 className="contact-container-header">Contact Me</h1>
			<SendEmailComponent />
			<LinkLayout links={links} ulClassName={"list"} />
		</div>
	);
}
