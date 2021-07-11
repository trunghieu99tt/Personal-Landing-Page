/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useData } from "../../talons/useData";

const Skills = () => {
    const [data, setData] = useState<any>(null);

    const { fetchData } = useData({
        endpoint: "skills.json",
    });

    const getSkills = async () => {
        const response = await fetchData();
        setData(response);
    };

    useEffect(() => {
        getSkills();
    }, []);

    return (
        <div className="skills introduction-item introduction-item--active grid grid--3">
            {data?.map((item: any) => {
                return (
                    <div
                        className="skill-item"
                        style={{
                            fontSize: "1.5rem",
                        }}
                    >
                        + {item.title}
                    </div>
                );
            })}
        </div>
    );
};

export default Skills;
