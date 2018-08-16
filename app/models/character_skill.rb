class CharacterSkill < ApplicationRecord
  belongs_to :character
  belongs_to :skill


  validates :character, :skill, presence: true
end
