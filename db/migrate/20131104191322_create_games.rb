class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :winner_id
      # or t.belongs_to :winner #becomes winner_id
      t.string   :winner_time
    end
  end
end
