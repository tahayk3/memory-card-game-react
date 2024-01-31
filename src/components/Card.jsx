import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import backFace from '../images/interrogante.jpg';

const Card = ({name, number, fronFace}) =>{
    const [isFlipped, setIsFlipped] = useState(false);
    return(
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped}>
                <img className="card-image" src={backFace}/>
                <img className="card-image" src={fronFace}/>
            </ReactCardFlip>
        </div>
    );
}

export default Card;