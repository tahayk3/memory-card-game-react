import React, {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip";
import backFace from '../images/interrogante.jpg';

const Card = ({name, number, fronFace, flipCard, unflippedCards, disabledCards}) =>{
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);

    useEffect(()=>{
        if(unflippedCards.includes(number)){
            setTimeout(() => setIsFlipped(false), 700);
        }
    },[unflippedCards]);

    useEffect(()=>{
        if(disabledCards.includes(number)){
            setHasEvent(false);
        }
    },[disabledCards]);

    const handleClick = e =>{
        const value = flipCard(name,number);
        if(value !== 0){
            setIsFlipped(!isFlipped);
        }
    }

    return(
        <div className="card">
            <ReactCardFlip isFlipped={isFlipped}>
                <img className="card-image" src={backFace} onClick={hasEvent? handleClick: null}/>
                <img className="card-image" src={fronFace} onClick={hasEvent? handleClick: null}/>
            </ReactCardFlip>
        </div>
    );
}

export default Card;