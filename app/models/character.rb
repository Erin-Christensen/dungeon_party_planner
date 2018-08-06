class Character < ApplicationRecord
  belongs_to :user

  validates :name, :image, :user, presence: true
end
