import './App.css';
import TeamCard from './TeamCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faTiktok, faSoundcloud} from '@fortawesome/free-brands-svg-icons';
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
        <h1 className={loaded ? "title" : "title-unloaded"}>alore</h1>
        <div className='Socials'>
          <h3>follow our socials to stay up to date:</h3>
          <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.instagram.com/forthealore/" ><FontAwesomeIcon icon={faInstagram}/></a>
          <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.tiktok.com/@forthealore" ><FontAwesomeIcon size='xs' icon={faTiktok}/></a>
          <a className={loaded ? "socialIcon" : "socialIcon-unloaded"} href="https://www.instagram.com/forthealore/" ><FontAwesomeIcon icon={faSoundcloud} size='xs'/></a>
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
