import React, { Component } from "react";
import ProjectCard from "../components/Cards/ProjectCard";
import Isotope from "isotope-layout";
import Masonry from "react-masonry-component";
import $ from "jquery";
import { encodeString } from "./Helper";

export default class MyProjects extends Component {
	state = {
		myProjectsData: [
			{
				category: "Pet Project",
				dataFilter: "pet-project",
				name: "Todo App",
				url: "https://trunghieu99tt.github.io/Todo-List-With-ReactJS/",
				image: require("../images/todo.PNG")
			},
			{
				category: "Real Project",
				dataFilter: "real-project",
				name: "Clothing Shop",
				url: "https://trunghieu99tt.github.io/Clothing-Shop/",
				image: require("../images/clothing-shop.PNG")
			},

			{
				category: "Landing Page",
				dataFilter: "landing-page",
				name: "TinDog",
				url: "https://trunghieu99tt.github.io/TinDog/",
				image: require("../images/tindog.PNG")
			},
			{
				category: "Pet Project",
				dataFilter: "pet-project",
				name: "Christmas",
				url: "https://trunghieu99tt.github.io/Christmas/",
				image: require("../images/chrismas.PNG")
			},
			{
				category: "Landing Page",
				dataFilter: "landing-page",
				name: "Omnifood",
				url: "https://trunghieu99tt.github.io/OmniFood/",
				image: require("../images/omnifood.PNG")
			},
			{
				category: "Landing Page",
				dataFilter: "landing-page",
				name: "Cosmetic Shop",
				url: "https://trunghieu99tt.github.io/cosmeticsShop/",
				image: require("../images/cosmeticshop.PNG")
			},

			{
				category: "Real Project",
				dataFilter: "real-project",
				name: "VgaSoft",
				url: "https://vgasoft.vn/",
				image: require("../images/vgasoft.PNG")
			},
			{
				category: "Landing Page",
				dataFilter: "landing-page",
				name: "Video Blog Template",
				url: "https://trunghieu99tt.github.io/Video-Blog/",
				image: require("../images/videoblog.PNG")
			},
			{
				category: "Pet Project",
				dataFilter: "pet-project",
				name: "Pixel Thought",
				url: "https://trunghieu99tt.github.io/Pixel-Thought/",
				image: require("../images/pixel-thought.PNG")
			},
			{
				category: "Pet Project",
				dataFilter: "pet-project",
				name: "Music Player",
				url: "https://trunghieu99tt.github.io/Music-Player/",
				image: require("../images/music-player.PNG")
			},
			{
				category: "Pet Project",
				dataFilter: "pet-project",
				name: "Memory Cards",
				url: "https://trunghieu99tt.github.io/Memory-Card/",
				image: require("../images/memory-card.PNG")
			},

			{
				category: "Real Project",
				dataFilter: "real-project",
				name: "Nhà thuốc GPP",
				url: "https://nhathuocgpp.com.vn/",
				image: require("../images/nhathuoc.PNG")
			}
		]
	};

	componentDidMount() {
		const grid = document.querySelector(".my-projects-showcase");
		var iso = new Isotope(grid, {
			// options...
			layoutMode: "masonry",
			filter: "*",
			animationOptions: {
				duration: 1500,
				easing: "linear",
				queue: false
			}
			// itemSelector: ".portfolio-item"
			// masonry: {
			// 	columnWidth: 200
			// }
		});
		const links = document.querySelectorAll(".my-projects__filter-button");
		links.forEach(item => {
			item.addEventListener("click", () => {
				const activeButton = document.querySelector(".filter-active");
				activeButton.classList.remove("filter-active");
				item.classList.add("filter-active");
				const selector = item.getAttribute("data-filter");
				if (selector === "*") {
					iso.arrange({ filter: "*" });
				} else iso.arrange({ filter: `.${selector}` });
			});
		});
	}

	render() {
		const { myProjectsData } = this.state;

		const categories = [
			...new Set(
				myProjectsData &&
					myProjectsData.length > 0 &&
					myProjectsData.map(item => item.category)
			)
		];

		return (
			<section className="my-projects margin-top-7" id = "projects">
				<div className="container">
					<div className="timeline__heading">
						<div className="text-wrapper">
							<h3 className="timeline__subtitle">My Projects</h3>
						</div>
						<div className="text-wrapper">
							<h2 className="timeline__title">
								All Project I've made
							</h2>
						</div>
					</div>
					<ul className="my-projects__filter-buttons">
						<li
							className="my-projects__filter-button filter-active"
							data-filter="*"
						>
							All Category
						</li>
						{categories &&
							categories.length > 0 &&
							categories.map(item => (
								<li
									className="my-projects__filter-button"
									data-filter={encodeString(item)}
								>
									{item}
								</li>
							))}
					</ul>
					<div className="my-projects-showcase">
						{myProjectsData &&
							myProjectsData.length > 0 &&
							myProjectsData.map(item => {
								return <ProjectCard {...item} />;
							})}
					</div>
				</div>
			</section>
		);
	}
}
