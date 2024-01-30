import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  return (
    <div className="App">
      <div className='cards-container'>
        {cards.map(card =>(
          <Card/>
        ))}   
      </div>
    </div>
  );
}

export default App;
