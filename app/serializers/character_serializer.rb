class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_tier, :user, :task, :level, :image_tier,:stat, :health
  belongs_to :class_type
end
