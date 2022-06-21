import React from "react";

export default function FooterPage() {
	return (
		<div className="footer" id="footer">
			<a
				className="footer-link"
				href={`${process.env.PUBLIC_URL}/credits.html`}
			>
				Credits
			</a>
		</div>
	);
}
