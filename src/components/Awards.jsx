import React, { Component } from "react";
import AwardCard from "./Cards/AwardCard";

export default class Awards extends Component {
	render() {
		const awardsData = [
			{
				title: "Giải 3 cuộc thi lập trình chuẩn quốc tế ACM/ICPC PTIT",
				image: require("../images/img4.png"),
				url:
					"https://www.facebook.com/ICPC.PTIT/photos/a.297414617001019/1690504441025356/?type=3&theater",
				description:
					"Thành viên team AHP Team giành giải 3 cuộc thi lập trình theo chuẩn quốc tế ACM/ICPC PTIT 2018"
			},
			{
				title:
					"Giải tiềm năng cuộc thi lập trình chuẩn quốc tế ACM/ICPC PTIT",
				image: require("../images/img4.png"),
				url:
					"https://www.facebook.com/ICPC.PTIT/photos/a.297414617001019/1690504424358691/?type=3&theater",
				description:
					"Thành viên team AHP Team giành giải 3 cuộc thi lập trình theo chuẩn quốc tế ACM/ICPC PTIT 2018"
			},
			{
				title:
					"Giải nhì toàn quốc vòng loại 1 cuộc thi lập trình CodeWar 2019",
				image: require("../images/img5.jpg"),
				url:
					"https://www.facebook.com/CodeLearnFanpage/photos/a.2272869376367541/2390248681296276/?type=3&theater",
				description:
					"Thành viên team Toang team giành giải nhì toàn quốc vòng loại 1 trong cuộc thi Codewar 2019 do FPT Software và hội Sinh viên Việt Nam đồng tổ chức."
			},
			{
				title:
					"Giải nhì toàn quốc vòng loại 2 cuộc thi lập trình CodeWar 2019",
				image: require("../images/img5.jpg"),
				url:
					"https://www.facebook.com/CodeLearnFanpage/photos/a.2272869376367541/2390250014629476/?type=3&theater",
				description:
					"Thành viên team Toang team giành giải nhì toàn quốc vòng loại 2 trong cuộc thi Codewar 2019 do FPT Software và hội Sinh viên Việt Nam đồng tổ chức."
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
