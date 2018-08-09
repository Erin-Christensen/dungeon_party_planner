class CreateClassTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :class_types do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :main_stat, null: false
      t.text :suggested_task, null: false
      t.string :image_url, null: false
    end
  end
end
