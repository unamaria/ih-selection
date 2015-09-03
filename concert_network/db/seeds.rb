5.times do 
	concert = Concert.new
		concert.band = Faker::Company.name
		concert.venue = "Concert hall"
		concert.city = Faker::Address.city
		concert.date = DateTime.current
		concert.price = Faker::Number.decimal(2)
		concert.description = Faker::Lorem.paragraph
	concert.save
end

10.times do 
	concert = Concert.new
		concert.band = Faker::Company.name
		concert.venue = "Concert hall"
		concert.city = Faker::Address.city
		concert.date = 10.days.from_now
		concert.price = Faker::Number.decimal(2)
		concert.description = Faker::Lorem.paragraph
	concert.save
end

3.times do 
	concert = Concert.new
		concert.band = Faker::Company.name
		concert.venue = "Concert hall"
		concert.city = Faker::Address.city
		concert.date = 40.days.from_now
		concert.price = Faker::Number.decimal(2)
		concert.description = Faker::Lorem.paragraph
	concert.save
end