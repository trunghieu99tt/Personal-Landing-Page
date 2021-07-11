import React, { useCallback, useEffect, useState } from "react";
import Slider from "react-slick";

// talons
import { useData } from "../../talons/useData";

// components
import TimeLineCard1 from "../Cards/TimeLineCard1";
import TimelineCard2 from "../Cards/TimelineCard2";

const TimeLine = () => {
    const [data, setData] = useState<any>(null);

    const { fetchData } = useData({
        endpoint: "timeline.json",
    });

    const getTimeline = useCallback(async () => {
        const response = await fetchData();
        setData(response);
    }, [fetchData]);

    useEffect(() => {
        getTimeline();
    }, [getTimeline]);

    return (
        <section className="timeline" id="timeline">
            <div className="container">
                <div className="timeline__heading">
                    <div className="text-wrapper">
                        <h3 className="section-subheading">My experience</h3>
                    </div>
                    <div className="text-wrapper">
                        <h2 className="section-heading">
                            Education, Experience And Events
                        </h2>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="timeline-cards">
                            {data &&
                                data.length > 0 &&
                                data.map((item: any) => (
                                    <TimeLineCard1 data={item} />
                                ))}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <Slider
                            vertical={true}
                            verticalSwiping={true}
                            draggable={true}
                            slidesToScroll={1}
                            centerMode={false}
                            infinite={true}
                            speed={1000}
                            autoplay={true}
                            // nextArrow={`<button class = "timeline-next"></button>`}
                        >
                            {data &&
                                data.length > 0 &&
                                data.map((item: any) => (
                                    <TimelineCard2 data={item} />
                                ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeLine;
