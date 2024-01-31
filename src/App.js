import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import { images } from './import';

function App() {
  const [cards, setCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

  useEffect(()=>{
    shuffleArray(images);
    setCards(images);
  },[]);

  return (
    <div className="App">
      <div className='cards-container'>
        {cards.map((card, index) =>(
          <Card 
            name = {card.player}
            number={index}
            fronFace={card.img}  
          />
        ))}   
      </div>
    </div>
  );
}

export default App;
