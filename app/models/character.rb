class Character < ApplicationRecord
  belongs_to :user
  belongs_to :class_type
  has_many :character_skills, dependent: :destroy
  has_many :skills, through: :character_skills

  validates :name, :image_tier, :user, :task, :class_type, presence: true

  def levelUp
    newLevel = level + 1
    newImageTier = image_tier
    newStat = stat
    newHealth = health
    message = ""

    if newLevel >= 10 && newLevel < 19
      newImageTier = 1
    elsif newLevel >= 20
      newImageTier = 2
    end

    if newLevel%2 == 0
      newStat += 1
      message = "#{name}\'s #{class_type.main_stat} has increased!"
    end

    if newLevel%3 == 0
      newHealth += 1
      message = "#{name}\'s Health has increased!"
    end

    if newLevel%4 == 0
      message = "#{name} has learned a skill!"
    end

    {level: newLevel, image_tier: newImageTier, stat: newStat, health: newHealth, message: message}
  end

end
