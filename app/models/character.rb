class Character < ApplicationRecord
  belongs_to :user

  validates :name, :image, :user, :task, presence: true
end
