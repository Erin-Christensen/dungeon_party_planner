FactoryBot.define do
  factory :character do
    name Faker::Pokemon.name
    image "warrior.jpg"
    task Faker::BojackHorseman.tongue_twister
    user
  end
end
