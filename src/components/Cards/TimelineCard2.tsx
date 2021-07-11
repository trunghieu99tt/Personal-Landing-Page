import React from "react";

type Props = {
    data: any;
};

const TimelineCard2 = ({ data }: Props) => {
    const { companyName, timeStart, timeEnd, title, description } = data;
    return (
        <div className="timeline-card2">
            <div className="timeline-card2__info">
                <div className="timeline-card2__session">
                    ({timeStart} - {timeEnd !== "" ? timeEnd : "Now"})
                </div>
                <div className="timeline-card2__companyname">{companyName}</div>
            </div>
            <div className="timeline-card2__content">
                <h4 className="timeline-card2__title">{title}</h4>
                <div className="timeline-card2__description">{description}</div>
            </div>
        </div>
    );
};

export default TimelineCard2;
