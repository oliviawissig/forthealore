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
	faDiscord
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
					<meta name="title" content="ALORE"/>
					<meta name="description" content="The landing site for all things ALORE"/>
					<link rel='canonical' href='https://www.forthealore.com/' />
				</Helmet>
				<div className="Header">
					<div className={loaded ? "blurred-logo-img-loaded" : "blurred-logo-img"}>
						<img
							src="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/jvawjsjbig95fk5wdjvj"
							alt="alore logo" className="logo-img"
						/>
					</div>
					<h1 style={{display:"none"}}>welcome to the alore experience</h1>
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
					{/* <h2>alore live:</h2>
					 <div className="promo">
						<a href="https://www.eventbrite.com/e/alore-live-residents-only-tiger-friday-june-14th-tickets-924889378027?aff=oddtdtcreator" style={{width:"100%"}}>
							<div className="blurred-promo-img">
								<img src="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/xircvd5kwdltkag1zxcw" alt="alore live promo flyer" width="1080" height="1346" className="promo-img"/>
							</div>
						</a>
						<br></br><br></br>
						<a href="https://www.eventbrite.com/e/alore-live-residents-only-tiger-friday-june-14th-tickets-924889378027?aff=oddtdtcreator" className="btn">Buy Tickets</a>
					</div> */}

					<h2>youtube channel:</h2>
					<div className="iframe-container">
						<iframe className="iframe-responsive" width="560" height="315" src="https://www.youtube.com/embed/YlnSHqrcc5U?si=WFI8eCTMyP6cI9H2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
					<div className="iframe-container">
						<iframe className="iframe-responsive" width="560" height="315" src="https://www.youtube.com/embed/_kJ4c-xcckw?si=B4Rs1MmCtjtpyujK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
					<h2>meet the team:</h2>
					<div className="Team">
						<TeamCard
							memberName="Shino Smoke" memberId="shino"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/icabnapkiqf2fpf31tp4"
							href="https://www.instagram.com/shinosmoke/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="596"
							height="737"
						/>
						<TeamCard
							memberName="Solace Denim" memberId="solace"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/obcifi92l2zt7sdpx6ks"
							href="https://www.instagram.com/solacedenim/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="720"
							height="1077"
						/>
						<TeamCard
							memberName="Miss Organic" memberId="organic"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/ygbgjynwb3lq9y3akrnp"
							href="https://www.instagram.com/ms.orgaanic/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="596"
							height="881"
						/>
						<TeamCard
							memberName="Two-Seven" memberId="twoseven"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/bywgph8iwszbi7zc1nvu"
							href="https://www.instagram.com/x8v1er/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="614"
							height="909"
						/>
						<TeamCard
							memberName="Shmunty" memberId="shmunty"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/gzktarac5tocf6ldojuj"
							href="https://www.instagram.com/shmunty/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="585"
							height="875"
						/>
						<TeamCard
							memberName="J Cash" memberId="jcash"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/vxjbrsiz8q2rictewbmq"
							href="https://www.instagram.com/jcashbta/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="1312"
							height="1968"
						/>
						<TeamCard
							memberName="Jason" memberId="jason"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/enacnnihra8x43jsnvpf"
							href="https://www.instagram.com/jason__gtz/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="768"
							height="614"
						/>
						<TeamCard
							memberName="Matthew" memberId="matthew"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/x2l5mbefnimugmz2wufn"
							href="https://www.instagram.com/paduaudap/"
							className={loaded ? "TeamImg" : "TeamImg-unloaded"}
							width="1290"
							height="2556"
						/>
						<TeamCard
							memberName="Donte" memberId="donte"
							memberImg="https://res.cloudinary.com/dyyurflew/image/upload/f_auto,q_auto/v8enht8m166fcn55e6ua"
							href="https://www.instagram.com/wavydonte/"
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
