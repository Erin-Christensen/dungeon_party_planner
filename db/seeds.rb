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

Character.create(
  user: User.first,
  name: "stronguy",
  image: "warrior.jpg",
  task: "do 20 push ups"
)

Character.create(
  user: User.first,
  name: "smartguy",
  image: "wizard.jpg",
  task: "do 20 books"
)
