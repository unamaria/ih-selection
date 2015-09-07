User.create!(name:  "Admin",
             email: "example@example.com",
             password:              "foobar",
             password_confirmation: "foobar",
             role: 									"admin")

9.times do |n|
  name  = Faker::Name.name
  email = Faker::Internet.email(name)
  password = "foobar"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
end

30.times do 
	concert = Concert.new
		concert.band = Faker::Company.name
		concert.venue = "Concert hall"
		concert.city = Faker::Address.city
		concert.date = Faker::Date.between(Date.today, 50.days.from_now)
		concert.price = Faker::Number.decimal(2)
		concert.description = Faker::Lorem.paragraph(3)
	concert.save

	rand(0..5).times do 
		comment = Comment.new(text: Faker::Lorem.paragraph)
		concert.comments << comment
	end
end