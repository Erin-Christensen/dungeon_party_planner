class AddMessagesToCharacter < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :message, :string, null: false, default: ""
  end
end
