import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import backFace from '../images/interrogante.jpg';

const Card = ({name, number, fronFace}) =>{
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) =>{
        setIsFlipped(!isFlipped);
    }

    return(
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped}>
                <img className="card-image" src={backFace} onClick={handleClick}/>
                <img className="card-image" src={fronFace}/>
            </ReactCardFlip>
        </div>
    );
}

export default Card;