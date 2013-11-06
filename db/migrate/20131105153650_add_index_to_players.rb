class AddIndexToPlayers < ActiveRecord::Migration
  def change
  	 #Add index
     add_index(:players, :name)
  end
end
