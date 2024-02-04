import './App.css';
import TeamCard from './TeamCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTiktok, faSoundcloud, faYoutube, faDiscord} from '@fortawesome/free-brands-svg-icons';
import shinoImg from './images/shino.jpg';
import jasonImg from './images/jason.jpg';
import matthewImg from './images/matthew.jpg';
import hofImg from './images/hofisbetter.jpg';

import { useEffect, useState } from 'react';

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    setLoaded(true);
  })

  return (
    <div className="App">
      <div className={loaded ? "Overlay" : "Overlay-unloaded"}></div>
      <div className='Info'>
        <div className='Header'>
          <h1 className={loaded ? "title" : "title-unloaded"}>alore</h1>
          <div className='Socials'>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.instagram.com/forthealore/" ><FontAwesomeIcon icon={faInstagram}/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.tiktok.com/@forthealore" ><FontAwesomeIcon size='xs' icon={faTiktok}/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://on.soundcloud.com/9kooV" ><FontAwesomeIcon icon={faSoundcloud} size='xs'/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.youtube.com/@forthealore" ><FontAwesomeIcon icon={faYoutube} size='xs'/></a>
            <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://discord.gg/HW2qtJvk8J" ><FontAwesomeIcon icon={faDiscord} size='xs'/></a>
          </div>
        </div>
        <h3>alore radio:</h3>
        <div className='iframe-container'>
          <iframe className='iframe-responsive' width="560" height="315" src="https://www.youtube.com/embed/4514j7NTJ_k?si=voI8Q-fEU985sHD9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h3>meet the team:</h3>
        <div className='Team'>
            <TeamCard memberName="Shino Smoke" memberImg={shinoImg} href='https://www.instagram.com/shinosmoke/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
            <TeamCard memberName="Jason" memberImg={jasonImg} href='https://www.instagram.com/jason__gtz/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
            <TeamCard memberName="Matthew" memberImg={matthewImg} href='https://www.instagram.com/paduaudap/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
            <TeamCard memberName="HOF SAC" memberImg={hofImg} href='https://www.instagram.com/hofisbetter/' className={loaded ? "TeamImg" : "TeamImg-unloaded"}/>
        </div>
      </div>
    </div>
  );
} 

export default App; 
