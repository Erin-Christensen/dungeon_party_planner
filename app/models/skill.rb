class Skill < ApplicationRecord
  has_many :character_skills
  has_many :characters, through: :character_skills

  enum class_name: {Bard: 0, Wizard: 1, Fighter: 2}

  validates :name, :class_name, presence: true
end
