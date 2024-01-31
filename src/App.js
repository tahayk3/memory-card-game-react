import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import { images } from './import';

function App() {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);

  useEffect(()=>{
    shuffleArray(images);
    setCards(images);
  },[]);

  useEffect(()=>{
    checkForMatch();
  },[secondCard]);


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  const flipCard = (name, number) =>{
    if(firstCard.name == name && firstCard.number == number){
      return 0;
    }
    if(!firstCard.name){
      setFirstCard({name,number});
    }
    else if(!secondCard.name){
      setSecondCard({name, number});
    }
    return 1;
  }



  const checkForMatch= () =>{
    if(firstCard.name && secondCard.name)
    {
      const match = firstCard.name == secondCard.name;
      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () =>{
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () =>{
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const  resetCards = ()=>{
    setFirstCard({});
    setSecondCard({});
  }

  return (
    <div className="App">
      <div className='cards-container'>
        {cards.map((card, index) =>(
          <Card
            key={index} 
            name = {card.player}
            number={index}
            fronFace={card.img}
            flipCard={flipCard}  
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}
          />
        ))}   
      </div>
    </div>
  );
}

export default App;
