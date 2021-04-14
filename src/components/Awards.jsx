import React, { Component } from "react";
import AwardCard from "./Cards/AwardCard";

export default class Awards extends Component {
    render() {
        const awardsData = [
            {
                title:
                    "Third Prize in Vietnam Olympic Informatics for College Student",
                url:
                    "https://www.facebook.com/KhoaCNTT1.PTIT/posts/1035771256936453",
                image: require("../images/olp.jpg"),
            },
            {
                title: "Champion in ACM/ICPC PTIT 2020",
                image: require("../images/icpcptit2020.jpg"),
                url:
                    "https://www.facebook.com/ICPC.PTIT/posts/3567810323294749",
            },
            {
                title: "Third Prize in Vietnam National Programing Contest",
                image: require("../images/olp.jpg"),
                url:
                    "https://www.facebook.com/KhoaCNTT1.PTIT/posts/1035771256936453",
            },
            {
                title: "3rd place, potential prize in ACM/ICPC PTIT 2018",
                image: require("../images/img4-min.png"),
                url:
                    "https://www.facebook.com/ICPC.PTIT/photos/a.297414617001019/1690504441025356/?type=3&theater",
            },
        ];

        return (
            <div
                className="awards introduction-item grid grid--2"
                data="awards"
            >
                {awardsData &&
                    awardsData.length > 0 &&
                    awardsData.map((item) => {
                        return <AwardCard {...item} />;
                    })}
            </div>
        );
    }
}
