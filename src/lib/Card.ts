export default class Card {
    rank: string;
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';

    constructor(rank: string, suit: 'diams' | 'hearts' | 'clubs' | 'spades') {
        this.rank = rank;
        this.suit = suit;
    }
}