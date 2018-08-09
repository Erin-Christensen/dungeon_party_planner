class ClassType < ApplicationRecord
  has_many :characters

  enum main_stat: {Strength: 0, Intelligence: 1, Wisdom: 2, Dexterity: 3, Charisma: 4}
  
  validates :name, :image_url, :description, :main_stat, :suggested_task, presence: true
end
