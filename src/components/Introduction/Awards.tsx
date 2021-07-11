/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// utils
import client from "../../client";
import { useData } from "../../talons/useData";

// components
import AwardCard from "../Cards/AwardCard";

const Awards = () => {
    const [data, setData] = useState<any>([]);

    const { fetchData } = useData({
        endpoint: "awards.json",
    });

    const getAwards = async () => {
        const response = await fetchData();
        setData(response);
    };

    useEffect(() => {
        getAwards();
    }, []);

    return (
        <div className="awards introduction-item introduction-item--active grid grid--2">
            {data &&
                data.length > 0 &&
                data.map((item: any, idx: number) => {
                    return <AwardCard {...item} key={`award-card-${idx}`} />;
                })}
        </div>
    );
};

export default Awards;
