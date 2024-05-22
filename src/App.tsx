import React, { useState } from 'react';
import CardComponent from './compnents/Card';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';
import './App.css'

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    setCards(deck.getCards(5))
    };

    const pokerHand = cards.length > 0 ? new PokerHand(cards) : null;
    const handOutcome = pokerHand ? pokerHand.getOutcome() : 'Старшая карта';

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
        <div className="handOutcome">
          <p>Текущая рука: {handOutcome}</p>
        </div>
      </>
    )}
  </div>
  );
}

export default App
