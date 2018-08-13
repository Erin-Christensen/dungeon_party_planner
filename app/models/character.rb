class Character < ApplicationRecord
  belongs_to :user
  belongs_to :class_type
  #enum class_name: {fighter: 0, wizard: 1, cleric: 2, rogue: 3, bard: 4}

  validates :name, :image_tier, :user, :task, :class_type, presence: true

  def levelUp
    newLevel = level + 1
    newImageTier = image_tier
    if newLevel >= 10 && newLevel < 19
      newImageTier = 1
    elsif newLevel >= 20
      newImageTier = 2
    end
    {level: newLevel, image_tier: newImageTier}
  end

end
