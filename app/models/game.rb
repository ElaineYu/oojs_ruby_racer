class Game < ActiveRecord::Base
  has_many :rounds
  has_many :players, through: :rounds

  belongs_to :winner, class_name: "Player"

end
