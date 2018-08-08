class Character < ApplicationRecord
  belongs_to :user

  enum class_name: {fighter: 0, wizard: 1, cleric: 2, rogue: 3, bard: 4}

  validates :name, :image_url, :user, :task, :class_name, presence: true
end
