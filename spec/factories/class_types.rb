FactoryBot.define do
  factory :class_type do
    name "Fighter"
    description "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat."
    main_stat "Strength"
    suggested_task "Do 20 push ups!"
    image_url "https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/fighter/"
  end
end
