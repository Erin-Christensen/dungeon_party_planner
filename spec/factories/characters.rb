FactoryBot.define do
  factory :character do
    name Faker::Pokemon.name
    task Faker::BojackHorseman.tongue_twister
    class_type
    user
  end
end
