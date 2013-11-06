class Player < ActiveRecord::Base

  validates :name, presence: true
  validates :name, uniqueness: { message: " already exists in our system." }

  has_many :won_games, class_name: "Game", foreign_key: :winner_id
  #QUERIES
  # elaine = Player.first
  # elaine.won_games
  # Player.first.won_games

  has_many :rounds
  has_many :games, through: :rounds
  #QUERIES
  #Player.first.rounds
  #Shovel a game into player
  #elaine.games << Game.first
  #elaine.games

 

end
