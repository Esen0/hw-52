import Card from "./Card";

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const suits = ['diams', 'hearts', 'clubs', 'spades'] as const;

export default class CardDeck {
    private cards: Card[];  

    constructor() {
        this.cards = [];
        for (const suit of suits) {
            for(const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    getCard(): Card | null {
        if (this.cards.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const cardArrray = this.cards.splice(randomIndex, 1);
        return cardArrray[0];
    }

    getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for(let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if(card) {
                drawnCards.push(card);
            } else {
                break;
            }
        }
        return drawnCards;
    }
}