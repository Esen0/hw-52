import Card from './Card';

export default class PokerHand {
    private cards: Card[];
  
    constructor(cards: Card[]) {
      this.cards = cards;
    }
  
    getOutcome(): string {
      if (this.isFlush()) return 'Флэш';
      if (this.isThreeOfAKind()) return 'Тройка';
      if (this.isTwoPair()) return 'Две пары';
      if (this.isOnePair()) return 'Одна пара';
      return 'Старшая карта';
    }
  
    private isFlush(): boolean {
      const suits = this.cards.map(card => card.suit);
      return suits.every(suit => suit === suits[0]);
    }
  
    private isThreeOfAKind(): boolean {
      const rankCounts = this.getRankCounts();
      return Object.values(rankCounts).some(count => count === 3);
    }
  
    private isTwoPair(): boolean {
      const rankCounts = this.getRankCounts();
      const pairs = Object.values(rankCounts).filter(count => count === 2);
      return pairs.length === 2;
    }
  
    private isOnePair(): boolean {
      const rankCounts = this.getRankCounts();
      return Object.values(rankCounts).some(count => count === 2);
    }
  
    private getRankCounts(): { [key: string]: number } {
      const rankCounts: { [key: string]: number } = {};
      this.cards.forEach(card => {
        if (!rankCounts[card.rank]) {
          rankCounts[card.rank] = 0;
        }
        rankCounts[card.rank]++;
      });
      return rankCounts;
    }
}