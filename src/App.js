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
					src="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/zmrvt05zz1t4oiswipv1"
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
				{/* <div className="promo">
					<img src="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/xnfmmfpgsqv6yrbk6lu5" alt="NOODZ promo" width="720" height="898" className="promo-img"/>
					<a href="https://socialcluboftomorrow.com/" className="btn">Get Access</a>
				</div> */}
			</div>

			<div className="site-body">
				<h3>alore live:</h3>
				<div className="promo">
					<a href="https://www.eventbrite.com/e/hyphy-house-tiger-friday-april-26th-tickets-883750209667?utm_experiment=test_share_listing&aff=ebdsshios">
						<img src="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/i9lbo6jdz0jd24qy2c7h" alt="NOODZ promo" width="720" height="898" className="promo-img"/>
					</a>
					<a href="https://www.eventbrite.com/e/hyphy-house-tiger-friday-april-26th-tickets-883750209667?utm_experiment=test_share_listing&aff=ebdsshios" className="btn">Get Access</a>
				</div>

				<h3>previous performances:</h3>
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
				<div className="iframe-container">
					<iframe
						className="iframe-responsive"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/EneKpOkihms?si=up2TSr-Ze_PS8K2B"
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
						src="https://www.youtube.com/embed/ziDoq4_sbq8?si=TGPUUHkKJX93QlgW"
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
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/icabnapkiqf2fpf31tp4"
						href="https://www.instagram.com/shinosmoke/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="720"
						height="1077"
					/>
					<TeamCard
						memberName="Solace Denim"
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/obcifi92l2zt7sdpx6ks"
						href="https://www.instagram.com/solacedenim/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="720"
						height="1077"
					/>
					<TeamCard
						memberName="Miss Organic"
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/ygbgjynwb3lq9y3akrnp"
						href="https://www.instagram.com/ms.orgaanic/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="596"
						height="883"
					/>
					<TeamCard
						memberName="Two-Seven"
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/bywgph8iwszbi7zc1nvu"
						href="https://www.instagram.com/x8v1er/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="614"
						height="909"
					/>
					<TeamCard
						memberName="Shmunty"
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/gzktarac5tocf6ldojuj"
						href="https://www.instagram.com/shmunty/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="585"
						height="875"
					/>
					<TeamCard
						memberName="J Cash"
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/vxjbrsiz8q2rictewbmq"
						href="https://www.instagram.com/jcashbta/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="1312"
						height="1968"
					/>
					<TeamCard
						memberName="Jason"
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/enacnnihra8x43jsnvpf"
						href="https://www.instagram.com/jason__gtz/"
						className={loaded ? "TeamImg" : "TeamImg-unloaded"}
						width="768"
						height="614"
					/>
					<TeamCard
						memberName="Matthew"
						memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/x2l5mbefnimugmz2wufn"
						href="https://www.instagram.com/paduaudap/"
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
