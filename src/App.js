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
import logo from "./images/alore-logo.PNG";
import flyer from "./images/love_supreme_flyer.JPG";

import { useEffect, useState } from "react";

function App() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<div className="App">
			<div className="Info">
				<div className="Header">
					<img
						src={logo}
						className={loaded ? "logo" : "logo-unloaded"}
						alt="alore logo"
						width="175"
					/>
				</div>
				<h3>alore live:</h3>
				<div className="alore-live-container">
					<div className="alore-live">
						<img
							src={flyer}
							className={
								loaded
									? "alore-live-img"
									: "alore-live-img-unloaded"
							}
							alt="alore x love supreme sacramento flyer"
						/>
						<a href="https://www.eventbrite.com/e/alore-live-love-supreme-tiger-friday-march-22nd-tickets-856585890457?aff=oddtdtcreator" target="_blank" rel="noreferrer">
              <div className="btn">
                <span className="btn-text">Buy Tickets</span>
              </div>
						</a>
					</div>
				</div>
				<h3>alore radio:</h3>
				<div className="iframe-container">
					<iframe
						className="iframe-responsive"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/2K-PCaqQWFM?si=NQ4GKOdTSgcT1DfK"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>
				</div>
				<h3>meet the team:</h3>
				<div className="Team">
					<TeamCard
						memberName="SHINO SMOKE"
						memberImg={shino}
						href="https://www.instagram.com/shinosmoke/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="720"
						height="1077"
					/>
					<TeamCard
						memberName="SOLACE DENIM"
						memberImg={solace}
						href="https://www.instagram.com/solacedenim/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="720"
						height="1077"
					/>
					<TeamCard
						memberName="MISS ORGANIC"
						memberImg={organic}
						href="https://www.instagram.com/ms.orgaanic/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="596"
						height="883"
					/>
					<TeamCard
						memberName="TWOSEVEN"
						memberImg={xavier}
						href="https://www.instagram.com/2700jit/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="614"
						height="909"
					/>
					<TeamCard
						memberName="SHMUNTY"
						memberImg={shmunty}
						href="https://www.instagram.com/shmunty/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="585"
						height="875"
					/>
					<TeamCard
						memberName="JCASH"
						memberImg={jcash}
						href="https://www.instagram.com/jcashbta/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="1312"
						height="1968"
					/>
				</div>
				<h3>hit us:</h3>
				<Form />
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
		</div>
	);
}

export default App;
