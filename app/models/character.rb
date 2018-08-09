class Character < ApplicationRecord
  belongs_to :user
  belongs_to :class_type
  #enum class_name: {fighter: 0, wizard: 1, cleric: 2, rogue: 3, bard: 4}

  validates :name, :image_tier, :user, :task, :class_type, presence: true
end
