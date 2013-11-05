class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.belongs_to :game
      t.belongs_to :player
      t.string     :winner
      t.string     :winner_time
      
      t.timestamps
    end
  end
end
