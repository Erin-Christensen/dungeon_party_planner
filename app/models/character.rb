class Character < ApplicationRecord
  belongs_to :user
  belongs_to :class_type

  validates :name, :image_tier, :user, :task, :class_type, presence: true

  def levelUp
    newLevel = level + 1
    newImageTier = image_tier
    newStat = stat
    newHealth = health
    messages = ""
    if newLevel >= 10 && newLevel < 19
      newImageTier = 1
    elsif newLevel >= 20
      newImageTier = 2
    end
    if newLevel%2 == 0
      newStat += 1
      messages = "#{name}\'s #{class_type.main_stat} has increased!"
    end
    if newLevel%3 == 0
      newHealth += 1
      messages = "#{name}\'s Health has increased!"
    end

    {level: newLevel, image_tier: newImageTier, stat: newStat, health: newHealth, message: messages}
  end

end
