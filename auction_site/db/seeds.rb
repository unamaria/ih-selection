garfield = User.create!(name:  "Garfield",
					              email: "garfield@garfield.com",
					              password:              "password",
					              password_confirmation: "password")
3.times do
	product = Product.new(title: Faker::Commerce.product_name,
									    	description: Faker::Lorem.paragraph,
									    	deadline: Faker::Date.between(Date.today, 1.year.from_now),
									    	min_bid: Faker::Commerce.price)
	garfield.products << product
end

29.times do |n|
  name  = Faker::Name.name
  email = Faker::Internet.email(name)
  password = "password"
  user = User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
  rand(1..5).times do
    product = Product.new(title: Faker::Commerce.product_name,
										    	description: Faker::Lorem.paragraph,
										    	deadline: Faker::Date.between(Date.today, 1.year.from_now),
										    	min_bid: Faker::Commerce.price)
    user.products << product
  end
end