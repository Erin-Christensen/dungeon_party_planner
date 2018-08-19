require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  email: "squirtle@example.com",
  password: "password"
)

ClassType.create(
  name: "Fighter",
  description: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.",
  main_stat: "Strength",
  suggested_task: "Do 20 push ups!",
  image_url:"https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/fighter/"
)

ClassType.create(
  name: "Bard",
  description: "Uses their charm and wit to amuse everyone. Is equally good at singing, juggling, and giving presentations in front of the board of directors.",
  main_stat: "Charisma",
  suggested_task: "Practice that speech.",
  image_url:"https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/bard/"
)

ClassType.create(
  name: "Wizard",
  description: "Wields powerful spells after years of careful study. Always has a book or scroll. Fireballs for weeks. He's lit.",
  main_stat: "Intelligence",
  suggested_task: "Push a branch to GitHub!",
  image_url:"https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/wizard/"
)

Character.create(
  user: User.first,
  class_type: ClassType.last,
  name: "Grandolph",
  task: "read a book"
)

Character.create(
  user: User.first,
  class_type: ClassType.first,
  name: "Launchelot",
  task: "do 20 push ups"
)

#for bard
30.times do
  Skill.create(
    name: Faker::Music.instrument,
    description: Faker::Music.album,
    class_name: 0
  )
end

#for wizard
30.times do
  Skill.create(
    name: Faker::Lovecraft.tome,
    description: Faker::GreekPhilosophers.quote + Faker::Lovecraft.fhtagn,
    class_name: 1
  )
end

#for fighter
30.times do
  Skill.create(
    name: Faker::Superhero.power,
    description: Faker::VentureBros.quote,
    class_name: 2
  )
end
