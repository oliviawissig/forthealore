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
        <a href={href}>
            <div className='TeamCard'>
                <div className={hover}>
                    <p className='hover-text'>{memberName}</p>
                </div>
                <img src={memberImg} className={className} width={150} alt={"profile avatar of" + memberName} onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)} ></img>
            </div>
        </a>
     );
}

export default TeamCard;