class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.belongs_to :user, null: false
      t.string :name, null: false
      t.integer :level, default: 0
      t.string :image, null: false
      t.boolean :in_party, default: true

      t.timestamps null: false
    end
  end
end
