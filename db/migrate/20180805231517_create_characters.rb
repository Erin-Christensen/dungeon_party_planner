class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.belongs_to :user, null: false
      t.string :name, null: false
      t.integer :level, default: 0
      t.string :image_url, null: false
      t.integer :class_name, default:0
      t.text :task, null: false

      t.timestamps null: false
    end
  end
end
