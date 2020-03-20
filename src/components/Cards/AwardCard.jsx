import React from "react";

const AwardCard = props => {
	const { title, url, image, description } = props;
	return (
		<div className="award-card">
			<div className="award-card__image-container">
				<img src={image} alt={title} className="award-card__image" />
			</div>

			<div className="award-card__content">
				<div className="text-wrapper">
					<a href={url}>
						<h2 className="award-card__title">{title}</h2>
					</a>
				</div>
				<div className="text-wrapper">
					<p className="award-card__description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default AwardCard;
