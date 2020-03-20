import React, { Component } from "react";
import TimeLineCard1 from "./Cards/TimeLineCard1";
import Slider from "react-slick";
import TimelineCard2 from "./Cards/TimelineCard2";

export default class TimeLine extends Component {
	render() {
		const timelinecardData = [
			{
				image: require("../images/nbm.jpg"),
				companyName: "NBM Media",
				timeStart: "2019",
				timeEnd: "",
				title: "Front-end Developer",
				description:
					" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi porro rerum inventore consequatur minima quibusdam et voluptate corporis reprehenderit, ratione magnam sed enim, sunt quisquam! Atque corporis assumenda explicabo earum."
			},
			{
				image: require("../images/img6.jpg"),
				companyName: "PTIT",
				timeStart: "2017",
				timeEnd: "",
				title: "Student",
				description:
					" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi porro rerum inventore consequatur minima quibusdam et voluptate corporis reprehenderit, ratione magnam sed enim, sunt quisquam! Atque corporis assumenda explicabo earum."
			}
		];

		return (
			<section className="timeline">
				<div className="container">
					<div className="timeline__heading">
						<div className="text-wrapper">
							<h3 className="timeline__subtitle">
								My experience
							</h3>
						</div>
						<div className="text-wrapper">
							<h2 className="timeline__title">
								Education, Experience And Timeline
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="timeline-cards">
								{timelinecardData &&
									timelinecardData.length > 0 &&
									timelinecardData.map(item => (
										<TimeLineCard1 {...item} />
									))}
							</div>
						</div>

						<div className="col-lg-6">
							{/* {"arrows":true,"arrow_prev_txt":"fa fa-angle-left","arrow_next_txt":"fa fa-angle-down","dots":false,"autoplay":true,"autoplay_speed":2000,"animation_speed":1000,"pause_on_hover":true,"center_mode":false,"vertical_mode":true,"center_padding":"px","display_columns":4,"scroll_columns":1,"tablet_width":778,"tablet_display_columns":3,"tablet_scroll_columns":1,"mobile_width":480,"mobile_display_columns":3,"mobile_scroll_columns":1} */}
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
								{timelinecardData &&
									timelinecardData.length > 0 &&
									timelinecardData.map(item => (
										<TimelineCard2 {...item} />
									))}
							</Slider>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
