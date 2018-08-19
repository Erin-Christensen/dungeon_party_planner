FactoryBot.define do
  factory :skill do
    name Faker::Superhero.power
    description Faker::VentureBros.quote
    class_name "Fighter"
  end
end
