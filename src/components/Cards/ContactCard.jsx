/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const ContactCard = (props) => {
	const { title, name, description, url } = props;

	return (
		<div className="contact-card">
			<div className="contact-card-infor">
				<div className="text-wrapper">
					<a
						className="contact-card__title"
						href={
							url || "https://facebook.com/LostBoyFromNeverLand99"
						}
						target="_blank"
					>
						{title}
					</a>
				</div>

				<div className="text-wrapper">
					<p className="contact-card__description">{description}</p>
				</div>
			</div>

			<div className="contact-card__icon">
				<i
					class={`${name !== "envelope" ? "fab" : "fas"} fa-${name}`}
				></i>
			</div>
		</div>
	);
};

export default ContactCard;
