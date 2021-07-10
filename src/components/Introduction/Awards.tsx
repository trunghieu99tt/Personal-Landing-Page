import React, { useEffect, useState } from "react";

// utils
import client from "../../client";

// components
import AwardCard from "../Cards/AwardCard";

const Awards = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await client.get("/awards.json");
        if (response?.data) {
            const data = Object.values(response.data);
            setData(data);
        }
    };

    return (
        <div className="awards introduction-item grid grid--2">
            {data &&
                data.length > 0 &&
                data.map((item: any) => {
                    return <AwardCard {...item} />;
                })}
        </div>
    );
};

export default Awards;

// const postData = async () => {
//     const awardsData = [
//         {
//             title: "Third Prize in Vietnam Olympic Informatics for College Student",
//             url: "https://www.facebook.com/KhoaCNTT1.PTIT/posts/1035771256936453",
//         },
//         {
//             title: "Champion in ACM/ICPC PTIT 2020",
//             url: "https://www.facebook.com/ICPC.PTIT/posts/3567810323294749",
//         },
//         {
//             title: "Third Prize in Vietnam National Programing Contest",
//             url: "https://www.facebook.com/KhoaCNTT1.PTIT/posts/1035771256936453",
//         },
//         {
//             title: "3rd place, potential prize in ACM/ICPC PTIT 2018",
//             url: "https://www.facebook.com/ICPC.PTIT/photos/a.297414617001019/1690504441025356/?type=3&theater",
//         },
//     ];

//     await Promise.all(
//         awardsData.map(async (data: any) => {
//             const response = await client.post("/awards.json", data);
//             console.log(`response`, response);
//         })
//     );
