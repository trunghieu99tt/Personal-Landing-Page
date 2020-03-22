import React from "react";

const TimeLineCard1 = props => {
	const { image, companyName, timeStart, timeEnd, title } = props;

	return image ? (
		<div className="timeline-card1">
			<div className="timeline-card1__image-container">
				<img
					src={image}
					alt={companyName}
					className="timeline-card1__image"
				/>
			</div>

			<div className="timeline-card1__content">
				<div className="text-wrapper">
					<h4 className="timeline-card1__title">
						{timeStart} - {timeEnd !== "" ? timeEnd : "Now"} (
						{title})
					</h4>
				</div>

				<div className="text-wrapper">
					<h2 className="timeline-card1__companyName">
						{companyName}
					</h2>
				</div>
			</div>
		</div>
	) : null;
};

export default TimeLineCard1;
