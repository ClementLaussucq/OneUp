
puts 'Cleaning database...'
Experience.destroy_all
User.destroy_all


puts 'Creating awesome users...'


10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  user_attributes = {
    first_name: first_name,
    last_name: last_name,
    age: rand(18..75),
    linkedin: "https://www.linkedin.com/",
    email: "#{first_name}.#{last_name}@oneup.com",
    password: 'clemchrisnico',
    password_confirmation: 'clemchrisnico'
  }
  User.create!(user_attributes)
end


users = User.all

puts 'Creating awesome experiences...'


# Do not uncomment, needed to generate eventually availability dates

# dates_number = rand(45..100)

# dates = []

# dates_number.times do
#   dates << Faker::Date.forward(rand(1..1000))
# end

# dates.uniq!


50.times do
  experiences_attributes = {
      user: users.sample,
      name: Faker::Job.title,
      description: Faker::Lorem.paragraph,
      price: rand(50..300),
      address: Experience::CITIES_ADDRESS.sample,
      category: Experience::CATEGORIES.sample,
  }
  Experience.create!(experiences_attributes)
end

puts 'Finished!'
