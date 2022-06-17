import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

export default function SendEmailComponent() {
	const [LOADING, SENT, FAILED, INITIAL] = [
		"loading",
		"sent",
		"failed",
		"initial",
	];
	const [emailStatus, setEmailStatus] = useState(INITIAL);
	const [formFields, setFormFields] = useState({
		from_name: "",
		reply_to: "",
		message: "",
	});

	const { from_name, reply_to, message } = formFields;

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&");
	};

	const handleChange = (e) => {
		setFormFields({
			...formFields,
			[e.target.name]: e.target.value,
		});
	};

	const sendEmail = (e) => {
		setEmailStatus(LOADING);
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "send-email-form", ...formFields }),
		})
			.then(() => {
				setEmailStatus(SENT);
			})
			.catch((err) => {
				setEmailStatus(FAILED);
				console.log(err);
			});
	};
	return (
		<div className="form-container">
			<h2>Send Me An Email</h2>
			{emailStatus === INITIAL && (
				<form
					name="send-email-form"
					id="send-email-form"
					action=""
					onSubmit={sendEmail}
				>
					<input type="hidden" name="form-name" value="send-email-form" />
					<div className="form-field">
						<label htmlFor="from_name">Your Name</label>
						<input
							placeholder="Casey Mockbee..."
							type="text"
							name="from_name"
							id="from_name"
							value={from_name}
							onChange={handleChange}
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
							value={reply_to}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-field">
						<label htmlFor="message">Your Message</label>
						<textarea
							placeholder="I like your stuff, kid. Want a job?"
							name="message"
							id="message"
							value={message}
							onChange={handleChange}
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
					OH NO!!! Something went wrong! Sorry for the inconvenience but can you
					send it to me at{" "}
					<a href="mailto:caseymockbee97@gmail.com">caseymockbee97@gmail.com</a>{" "}
					instead? Thanks!
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
