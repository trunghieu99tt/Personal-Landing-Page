import React, { Component } from "react";
import AwardCard from "./Cards/AwardCard";

export default class Awards extends Component {
	render() {
		const awardsData = [
			{
				title: "3rd place, potential prize in ACM/ICPC PTIT 2018",
				image: require("../images/img4.png"),
				url:
					"https://www.facebook.com/ICPC.PTIT/photos/a.297414617001019/1690504441025356/?type=3&theater",
				description:
					"A team member contributes to the archivement of AHP Team in ACM/ICPC PTIT 2018, 3rd place and potential prize in the final round"
			},
			{
				title: "2nd place in CodeWar 2019 elimination round 1 and 2",
				image: require("../images/img5.jpg"),
				url:
					"https://www.facebook.com/CodeLearnFanpage/photos/a.2272869376367541/2390248681296276/?type=3&theater",
				description:
					"A team member contributes to the archivement of Toang Team in Codewar 2019 organizated by FPT Software and Vietnamese Student Association"
			}
		];

		return (
			<div
				className="awards introduction-item grid grid--2"
				data="awards"
			>
				{awardsData &&
					awardsData.length > 0 &&
					awardsData.map(item => {
						return <AwardCard {...item} />;
					})}
			</div>
		);
	}
}
