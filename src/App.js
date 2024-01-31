import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import { images } from './import';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(()=>{
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
