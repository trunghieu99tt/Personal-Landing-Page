import React from "react";
import { encodeString } from "../Helper";
import Image from '../Image';

const ProjectCard = props => {
	const { category, name, url, image } = props;
	return (
		<div className={`project-card ${encodeString(category)}`}>
			<div className="project-card__image-container">
				<Image
					image={image}
					alt={name}
					className="project-card__image lazyload"
				/>
			</div>

			<div className="project-card__infor">
				<a className="project-card__name" href={url}>
					{name}
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
