class CharacterSkillSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :character
  belongs_to :skill
end
