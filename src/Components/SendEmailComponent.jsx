import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";

export default function SendEmailComponent() {
	const [LOADING, SENT, FAILED, INITIAL] = [
		"loading",
		"sent",
		"failed",
		"initial",
	];
	const [emailStatus, setEmailStatus] = useState(INITIAL);
	const sendEmail = (e) => {
		e.preventDefault();
		console.log("Submitting form");
		setEmailStatus(LOADING);
		emailjs
			.sendForm(
				"service_6zlr8q8",
				"template_pb0gl1q",
				"#send-email-form",
				"tPf5WIXDGQslc4o2d"
			)
			.then(
				(res) => {
					setEmailStatus(SENT);
					console.log("SENT", res?.status, res?.text);
				},
				(err) => {
					setEmailStatus(FAILED);
					console.log("FAILED", err);
				}
			);
	};
	return (
		<div className="form-container">
			<h2>Send Me An Email</h2>
			{emailStatus === INITIAL && (
				<form id="send-email-form" action="" onSubmit={sendEmail}>
					<div className="form-field">
						<label htmlFor="from_name">Your Name</label>
						<input
							placeholder="Casey Mockbee..."
							type="text"
							name="from_name"
							id="from_name"
							required
						/>
					</div>
					<div className="form-field">
						<label htmlFor="reply_to">Your email</label>
						<input
							placeholder="caseymockbee97@gmail.com"
							type="email"
							name="reply_to"
							id="reply_to"
							required
						/>
					</div>
					<div className="form-field">
						<label htmlFor="message">Your Message</label>
						<textarea
							placeholder="I like your stuff, kid. Want a job?"
							name="message"
							id="message"
							required
						/>
					</div>
					<button type="submit">
						<span>
							Send Email <AiOutlineSend />
						</span>
					</button>
				</form>
			)}
			{emailStatus === SENT && (
				<p className="success">Success! Your email is sent!</p>
			)}
			{emailStatus === FAILED && (
				<p className="failed">
					OH NO!!! Something went wrong! Sorry for the inconvenience but you can
					send me an email at{" "}
					<a href="mailto:caseymockbee97@gmail.com">caseymockbee97@gmail.com</a>{" "}
				</p>
			)}
			{emailStatus === LOADING && (
				<p className="loading">
					The robots behind the curtain are trying to send your email now,
					please wait a moment for confirmation...
				</p>
			)}
		</div>
	);
}
