class Deck
  RANKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, A, J, Q, K]
  SUITS = ["hearts", "diamonds", "clubs", "spades"]
  @cards = Struct.new(:ranks, :suits)
  ranks.map do |rank|
    suits.map do |suit|
      @cards = Card.new(rank, suit)
    end
  end

  def choose_card
    @cards.delete_at(rand(@cards.length))
  end

end
  
class Card
  attr_reader :rank, :suit
  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

end

