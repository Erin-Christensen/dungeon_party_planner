class AddStatsToCharacter < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :stat, :integer, null: false, default: 1
    add_column :characters, :health, :integer, null: false, default: 10 
  end
end
