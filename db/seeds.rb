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

User.create(
  email: "sonofchristensen@gmailcom",
  password: "qwerty",
  role: "admin"
)

ClassType.create(
  name: "Fighter",
  description: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.",
  main_stat: "Strength",
  suggested_task: "Do 20 push ups!",
  image_url:"https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/fighter/"
)

ClassType.create(
  name: "Wizard",
  description: "Always casting a bunch of spells.",
  main_stat: "Intelligence",
  suggested_task: "Push a branch to GitHub!",
  image_url:"https://s3.amazonaws.com/dungeon-party-planner-production/images/characters/wizard/"
)

Character.create(
  user: User.first,
  class_type: ClassType.first,
  name: "Stronguy",
  task: "do 20 push ups"
)

Character.create(
  user: User.first,
  class_type: ClassType.last,
  name: "Smartguy",
  task: "do 20 books"
)

Character.create(
  user: User.first,
  class_type: ClassType.first,
  name: "Songguy",
  task: "make a new friend"
)
