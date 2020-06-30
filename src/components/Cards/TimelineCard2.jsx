import React from "react";

const TimelineCard2 = props => {
	const { companyName, timeStart, timeEnd, title, description } = props;
	return (
		<div className="timeline-card2">
			<div class="timeline-card2__info">
				<div class="timeline-card2__session">
					({timeStart} - {timeEnd !== "" ? timeEnd : "Now"})
				</div>
				<div class="timeline-card2__companyname">{companyName}</div>
			</div>
			<div class="timeline-card2__content">
				<h4 class="timeline-card2__title">{title}</h4>
				<div class="timeline-card2__description">{description}</div>
			</div>
		</div>
	);
};

export default TimelineCard2;
