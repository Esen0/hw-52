import React, { useState } from 'react';
import CardComponent from './compnents/Card';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import './App.css'

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    setCards(deck.getCards(5))
    };

  return (
    <div className="App">
      {cards.length === 0 ? (
        <button onClick={dealCards}>Раздать карты</button>
      ) : (
        <>
          <button onClick={dealCards}>Раздать карты</button>
          <div className="playingCards faceImages">
            {cards.map((card, index) => (
              <CardComponent key={index} rank={card.rank} suit={card.suit} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App
