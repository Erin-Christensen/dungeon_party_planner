FactoryBot.define do
  factory :character do
    name Faker::Pokemon.name
    image_url 'https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/wizard/1.png'
    task Faker::BojackHorseman.tongue_twister
    user
  end
end
