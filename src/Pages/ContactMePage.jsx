import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineSend } from "react-icons/ai";

export default function ContactMePage() {
	return (
		<>
			<div id="contact-me" className="contact">
				<div className="contact-container">
					<h1 className="contact-container-header">Contact Me</h1>
					<ul className="contact-container-list">
						<li className="contact-container-list-item">
							<a
								target="_blank"
								rel="noreferrer"
								className="contact-container-list"
								href="https://github.com/caseymockbee97"
							>
								<div className="contact-container-list-link-container">
									GitHub <AiFillGithub />
								</div>
							</a>
						</li>
						<li className="contact-container-list-item">
							<a
								target="_blank"
								rel="noreferrer"
								className="contact-container-list"
								href="https://www.linkedin.com/in/casey-mockbee/"
							>
								<div className="contact-container-list-link-container">
									LinkedIn <AiFillLinkedin />
								</div>
							</a>
						</li>
						<li className="contact-container-list-item">
							<a
								target="_blank"
								rel="noreferrer"
								className="contact-container-list"
								href="mailto: caseymockbee97@gmail.com"
							>
								<div className="contact-container-list-link-container">
									Email <AiOutlineSend />
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
