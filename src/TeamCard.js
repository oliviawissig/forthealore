import { useState } from "react";
import './TeamCard.css';

function TeamCard({ href, memberName, memberImg, className  }) {
    const [hover, setHover] = useState("hover-inactive");
    
    const onHover = (e) => {
        e.preventDefault();
        setHover("hover-active");
    }

    const onHoverOver = (e) => {
        e.preventDefault();
        setHover("hover-inactive");
    }

    return ( 
        <a href={href} className="team-card-container">
            <div className='card-img-container'>
                <img src={memberImg} className={className} alt={"profile avatar of " + memberName} ></img>
            </div>
            <div className="card-body">
                <p>{memberName}</p>
                <a href='' className="card-link">Instagram &#8594;</a>
            </div>
        </a>
     );
}

export default TeamCard;