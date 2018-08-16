class CreateCharacterSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :character_skills do |t|
      t.belongs_to :character, null: false
      t.belongs_to :skill, null: false
    end
  end
end
