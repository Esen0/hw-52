import React from "react";
import '../cards.css'

interface Props {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const suitSymbols: {[key: string]: string} = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
}

const Card: React.FC<Props> = ({rank, suit}) => {
    return(
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitSymbols[suit]}</span>
        </span>
    );
};

export default Card;