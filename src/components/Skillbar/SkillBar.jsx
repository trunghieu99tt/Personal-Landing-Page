import React from "react";

const SkillBar = ({ title, percent }) => {
	return (
		<div className="skillbar">
			<div className="skillbar-heading">
				<p className="skillbar__title">{title}</p>

				<p className="skillbar__number">{percent}%</p>
			</div>
			<div className="progress-bar">
				<div
					className="progress-bar__inner"
					style={{
						width: `${percent}%`
					}}
				></div>
			</div>
		</div>
	);
};

export default SkillBar;
