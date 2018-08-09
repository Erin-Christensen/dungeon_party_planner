FactoryBot.define do
  factory :character do
    name Faker::Pokemon.name
    image_tier 0
    task Faker::BojackHorseman.tongue_twister
    class_type
    user
  end
end
