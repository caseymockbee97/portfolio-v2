import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";

export default function ContactMePage() {
	return (
		<>
			<div id="contact-me" className="contact">
				<div className="contact-container">
					<h1 className="contact-container-header">Contact Me</h1>
					<ul className="contact-container-list">
						<a
							target="_blank"
							rel="noreferrer"
							className="contact-container-list-link"
							href="https://github.com/caseymockbee97"
						>
							<li className="contact-container-list-link-container">
								GitHub <AiFillGithub />
							</li>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="contact-container-list-link"
							href="https://www.linkedin.com/in/casey-mockbee/"
						>
							<li className="contact-container-list-link-container">
								LinkedIn <AiFillLinkedin />
							</li>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							className="contact-container-list-link"
							href="mailto: caseymockbee97@gmail.com"
						>
							<li className="contact-container-list-link-container">
								<span>Email </span>
								<AiOutlineSend />
							</li>
						</a>
					</ul>
				</div>
			</div>
		</>
	);
}
