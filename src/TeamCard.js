import './TeamCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

const team_lazy_load_imgs = {
    shino: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/icabnapkiqf2fpf31tp4.jpg',
    solace: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/obcifi92l2zt7sdpx6ks.jpg', 
    organic: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/ygbgjynwb3lq9y3akrnp.jpg', 
    twoseven: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/bywgph8iwszbi7zc1nvu.jpg', 
    shmunty: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/gzktarac5tocf6ldojuj.jpg', 
    jcash: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/vxjbrsiz8q2rictewbmq.jpg', 
    jason: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/v1711513852/enacnnihra8x43jsnvpf.jpg',
    matthew: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/v1711513865/x2l5mbefnimugmz2wufn.png',
    donte: 'https://res.cloudinary.com/dyyurflew/image/upload/c_scale,h_0.10,w_0.10/v8enht8m166fcn55e6ua.jpg'
}

function TeamCard({ href, memberName, memberImg, memberId,  className, width, height  }) {
    const team_lazy_load_url = team_lazy_load_imgs[memberId];

    return ( 
        <div className="team-card-container">
            <div className='card-img-container'>
                <div className='blurred-team-img' style={{backgroundImage: 'url(' + team_lazy_load_url + ')'}}>
                    <img src={memberImg} className={className} alt={"profile avatar of " + memberName} width={width} height={height} loading="lazy"></img>
                </div>
            </div>
            <div className="card-body">
                <p style={{fontSize:'1.2rem'}}>{memberName}</p>
                <a href={href} className="card-link"><FontAwesomeIcon size="2xl" icon={faInstagram} /></a>
            </div>
        </div>
     );
}

export default TeamCard;