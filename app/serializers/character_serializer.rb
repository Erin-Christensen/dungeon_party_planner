class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_tier, :user, :task, :level, :image_tier,:stat, :health, :message
  belongs_to :class_type
  has_many :character_skills
  has_many :skills, through: :character_skills
end
