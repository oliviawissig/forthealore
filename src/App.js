import "./App.css";
import TeamCard from "./TeamCard";
import Form from "./Form";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faTiktok,
	faSoundcloud,
	faYoutube,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import { useEffect, useState } from "react";

function App() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<HelmetProvider>
			<div className="App">
				<Helmet>
					<meta name="title" content="ALORE" />
					<meta
						name="description"
						content="The landing site for all things ALORE"
					/>
					<link rel="canonical" href="https://www.forthealore.com/" />
				</Helmet>
				<div className="Header">
					<div
						className={
							loaded
								? "blurred-logo-img-loaded"
								: "blurred-logo-img"
						}>
						<img
							src="https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.20,w_0.20/jvawjsjbig95fk5wdjvj.png"
							alt="alore logo"
							className="logo-img"
						/>
					</div>
					<h1 style={{ display: "none" }}>
						welcome to the alore experience
					</h1>
					<div className="Socials">
						<a
							className={
								loaded ? "socialIcon" : "socialIcon-unloaded"
							}
							href="https://www.instagram.com/forthealore/">
							<FontAwesomeIcon size="md" icon={faInstagram} />
						</a>
						<a
							className={
								loaded ? "socialIcon" : "socialIcon-unloaded"
							}
							href="https://www.tiktok.com/@forthealore">
							<FontAwesomeIcon size="md" icon={faTiktok} />
						</a>
						<a
							className={
								loaded ? "socialIcon" : "socialIcon-unloaded"
							}
							href="https://on.soundcloud.com/9kooV">
							<FontAwesomeIcon icon={faSoundcloud} size="md" />
						</a>
						<a
							className={
								loaded ? "socialIcon" : "socialIcon-unloaded"
							}
							href="https://www.youtube.com/@forthealore">
							<FontAwesomeIcon icon={faYoutube} size="md" />
						</a>
						<a
							className={
								loaded ? "socialIcon" : "socialIcon-unloaded"
							}
							href="https://discord.gg/HW2qtJvk8J">
							<FontAwesomeIcon icon={faDiscord} size="md" />
						</a>
					</div>
				</div>

				<div className="site-body">
					<h2>alore live:</h2>
					<div className="promo">
						<a
							href="https://restlessnites.com/events/alore12jul2024"
							style={{ width: "100%" }}
							target="_blank"
							rel="noreferrer">
							<div className="blurred-promo-img">
								<img
									src="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/ladies_iacufu"
									alt="alore live promo flyer"
									width="1080"
									height="1346"
									className="promo-img"
								/>
							</div>
						</a>
						{/* <a href="javascript:void(0)" style={{ width: "100%" }}>
							<div className="blurred-promo-img">
								<img
									src="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/ladies_iacufu"
									alt="alore live promo flyer"
									width="1080"
									height="1346"
									className="promo-img"
								/>
							</div>
						</a> */}
						<br></br>
						<br></br>
						<a
							href="https://restlessnites.com/events/alore12jul2024"
							target="_blank"
							className="btn-girly"
							rel="noreferrer">
							Free!
						</a>
						<br></br>
						<br></br>
					</div>

					<h2>youtube channel:</h2>
					<div className="iframe-container">
						<iframe
							className="iframe-responsive"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/iDlfKZfOZtw?si=oUE5EPI5uV0xSIiR"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen></iframe>
					</div>
					<div className="iframe-container">
						<iframe
							className="iframe-responsive"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/PcIs8_nxgjI?si=Uf0B9ypb7M2B7I-2"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen></iframe>
					</div>
					<h2>team:</h2>
					<div className="Team">
						<TeamCard
							memberName="Shino Smoke"
							memberId="shino"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.75,w_0.75/icabnapkiqf2fpf31tp4.jpg"
							href="https://www.instagram.com/shinosmoke/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="596"
							height="737"
						/>
						<TeamCard
							memberName="Jason"
							memberId="jason"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.75,w_0.75/enacnnihra8x43jsnvpf"
							href="https://www.instagram.com/jason__gtz/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="768"
							height="614"
						/>
						<TeamCard
							memberName="Donte"
							memberId="donte"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/kmumutfqgiqlkfxwt20h"
							href="https://www.instagram.com/wavydonte/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="538"
							height="538"
						/>
						<TeamCard
							memberName="Matthew"
							memberId="matthew"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.75,w_0.75/x2l5mbefnimugmz2wufn"
							href="https://www.instagram.com/paduaudap/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="1290"
							height="2556"
						/>
					</div>
					<h2>contact:</h2>
					<Form />
				</div>
			</div>
		</HelmetProvider>
	);
}

export default App;
