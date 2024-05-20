import React, { useState } from 'react';
import './App.css'
import CardComponent from './compnents/Card';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';

const App: React.FC = () => {

  const [deck] = useState(new CardDeck());
  const [cards, setCards] = useState<Card[]>(deck.getCards(5));

  const drawCard = () => {
    const newCard = deck.getCard();
    if(newCard) {
    setCards([...cards, newCard]);
    }
  }

  return (
    <div className="playingCards faceImages">
      {cards.map((card, index) => (
        <CardComponent key={index} rank={card.rank} suit={card.suit}/>
      ))}
      <button onClick={drawCard}>Draw a Card</button>
    </div>
    
  )
}

export default App
