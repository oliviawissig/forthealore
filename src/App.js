import "./App.css";
import TeamCard from "./TeamCard";
import Form from "./Form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faTiktok,
	faSoundcloud,
	faYoutube,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import solace from "./images/solace.png";
import organic from "./images/organic.png";
import xavier from "./images/xavier.png";
import shmunty from "./images/shmunty.png";
import jcash from "./images/jcash.png";
import shino from "./images/shino.png";
import matthew from "./images/matthew.PNG";
import jason from "./images/jason.jpg";
import logo from "./images/alore-logo.PNG";

import { useEffect, useState } from "react";

function App() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<div className="App">
			<div className="Header">
				<img
					src={logo}
					className={loaded ? "logo" : "logo-unloaded"}
					alt="alore logo"
					width="296"
					height="208"
				/>
				<div className="Socials">
					<a
						className={
							loaded ? "socialIcon" : "socialIcon-unloaded"
						}
						href="https://www.instagram.com/forthealore/">
						<FontAwesomeIcon size="sm" icon={faInstagram} />
					</a>
					<a
						className={
							loaded ? "socialIcon" : "socialIcon-unloaded"
						}
						href="https://www.tiktok.com/@forthealore">
						<FontAwesomeIcon size="sm" icon={faTiktok} />
					</a>
					<a
						className={
							loaded ? "socialIcon" : "socialIcon-unloaded"
						}
						href="https://on.soundcloud.com/9kooV">
						<FontAwesomeIcon icon={faSoundcloud} size="sm" />
					</a>
					<a
						className={
							loaded ? "socialIcon" : "socialIcon-unloaded"
						}
						href="https://www.youtube.com/@forthealore">
						<FontAwesomeIcon icon={faYoutube} size="sm" />
					</a>
					<a
						className={
							loaded ? "socialIcon" : "socialIcon-unloaded"
						}
						href="https://discord.gg/HW2qtJvk8J">
						<FontAwesomeIcon icon={faDiscord} size="sm" />
					</a>
				</div>
			</div>

			<div className="site-body">
				<h3>alore radio:</h3>
				<div className="iframe-container">
					<iframe
						className="iframe-responsive"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/BHMAGWTIgcc?si=_IsS5Zsf7QTo7P9y"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen></iframe>
				</div>
				<h3>meet the team:</h3>
				<div className="Team">
					<TeamCard
						memberName="Shino Smoke"
						memberImg={shino}
						href="https://www.instagram.com/shinosmoke/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="720"
						height="1077"
					/>
					<TeamCard
						memberName="Solace Denim"
						memberImg={solace}
						href="https://www.instagram.com/solacedenim/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="720"
						height="1077"
					/>
					<TeamCard
						memberName="Miss Organic"
						memberImg={organic}
						href="https://www.instagram.com/ms.orgaanic/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="596"
						height="883"
					/>
					<TeamCard
						memberName="Two-Seven"
						memberImg={xavier}
						href="https://www.instagram.com/2700jit/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="614"
						height="909"
					/>
					<TeamCard
						memberName="Shmunty"
						memberImg={shmunty}
						href="https://www.instagram.com/shmunty/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="585"
						height="875"
					/>
					<TeamCard
						memberName="J Cash"
						memberImg={jcash}
						href="https://www.instagram.com/jcashbta/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="1312"
						height="1968"
					/>
					<TeamCard
						memberName="Jason"
						memberImg={jason}
						href="https://www.instagram.com/paduaudap/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="768"
						height="614"
					/>
					<TeamCard
						memberName="Matthew"
						memberImg={matthew}
						href="https://www.instagram.com/jason__gtz/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="1290"
						height="2556"
					/>
				</div>
				<h3>contact:</h3>
				<Form />
			</div>
		</div>
	);
}

export default App;
