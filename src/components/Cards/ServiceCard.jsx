import React from "react";

const ServiceCard = props => {
	const { image, title, description } = props;

	return (
		<div className="serviceCard">
			<div className="serviceCard__image-wrapper">
				<div class="serviceCard__circle-wrapper">
					<div class="serviceCard__circle"></div>
				</div>
				<div class="serviceCard__circle-wrapper">
					<div class="serviceCard__circle"></div>
				</div>
				<img
					src={image}
					alt={title}
					className="serviceCard__image lazyload"
				/>
			</div>

			<div className="serviceCard__content">
				<div className="text-wrapper">
					<h3 className="serviceCard__title">{title}</h3>
				</div>
				<div className="text-wrapper">
					<p className="serviceCard__description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
