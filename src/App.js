import './App.css';
import TeamCard from './TeamCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTiktok, faSoundcloud, faYoutube, faDiscord} from '@fortawesome/free-brands-svg-icons';
import shinoImg from './images/shino.jpg';
import jasonImg from './images/jason.jpg';
import matthewImg from './images/matthew.jpg';
import hofImg from './images/hofisbetter.jpg';
import tokyo1981 from './images/1981_tokyo.jpeg'

import { useEffect, useState, useRef } from 'react';

function App() {

  const [loaded, setLoaded] = useState(false);
  const [contentHover, setContentHover] = useState(false); //telling us where mouse is so we dont double scroll
  const contentRef = useRef(null); // access element to scroll

  useEffect( () => {
    setLoaded(true);
  }, [])

  //handle scroll when wheel event is fired

  // listen for the wheel event, keep a reference to the element we want to scroll, and then update that element's scrollTop whenever the event is fired
  useEffect( () => {
    const handleScrolling = (event) => {
      if(contentRef !== null) {
        if(contentHover === false) {
          contentRef.current.scrollTop += event.deltaY;
        }
      }
    }

    window.addEventListener("wheel", handleScrolling);

    return () => {
      window.removeEventListener("wheel", handleScrolling);
    }
  })

  return (
    <div className="App">
      <div className={loaded ? "Overlay" : "Overlay-unloaded"}></div>
      <div className='Info' ref={contentRef} onMouseEnter={ () => { setContentHover(true) }} onMouseLeave={ () => { setContentHover(false) }}>
        <div className='Header'>
          <h1 className={loaded ? "title" : "title-unloaded"}>alore</h1>
          <div className='Socials'>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.instagram.com/forthealore/" ><FontAwesomeIcon size='s' icon={faInstagram}/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.tiktok.com/@forthealore" ><FontAwesomeIcon size='s' icon={faTiktok}/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://on.soundcloud.com/9kooV" ><FontAwesomeIcon icon={faSoundcloud} size='s'/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.youtube.com/@forthealore" ><FontAwesomeIcon icon={faYoutube} size='s'/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://discord.gg/HW2qtJvk8J" ><FontAwesomeIcon icon={faDiscord} size='s'/></a>
          </div>
        </div>
        <h3>alore live:</h3>
        <div className='promo-container'>
          <TeamCard memberName="BUY TICKETS" memberImg={tokyo1981} href="https://www.eventbrite.com/e/alore-live-1981-tokyo-tiger-february-23rd-2024-tickets-827659330337?utm_source=website_homepage&utm_medium=website&utm_campaign=1981_tokyo" className={loaded ? "Promo" : "Promo-unloaded"} />
        </div>
        <div className='mobile-btn-container no-desktop'>
          <a href="https://www.eventbrite.com/e/alore-live-1981-tokyo-tiger-february-23rd-2024-tickets-827659330337?utm_source=website_homepage&utm_medium=website&utm_campaign=1981_tokyo" className='mobile-btn'>buy tickets</a>
        </div>
        <h3>alore radio:</h3>
        <div className='iframe-container'>
          <iframe className='iframe-responsive' width="560" height="315" src="https://www.youtube.com/embed/4514j7NTJ_k?si=voI8Q-fEU985sHD9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h3>meet the team:</h3>
        <div className='Team'>
            <TeamCard memberName="SHINO SMOKE" memberImg={shinoImg} href='https://www.instagram.com/shinosmoke/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
            <TeamCard memberName="JASON" memberImg={jasonImg} href='https://www.instagram.com/jason__gtz/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
            <TeamCard memberName="MATTHEW" memberImg={matthewImg} href='https://www.instagram.com/paduaudap/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
            <TeamCard memberName="HOF SAC" memberImg={hofImg} href='https://www.instagram.com/hofisbetter/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
        </div>
      </div>
    </div>
  );
} 

export default App; 
