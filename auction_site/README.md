# Auction site

## Description

Auction site where users can submit products to sell and other users can bid on them.

bids: When the deadline for bidding is reached, users should no longer be able to bid on the product and the product page should show who the winning bidder is
When users create a product, they should set a minimum price. Then when other users make a bid, it should only be saved if is above the minimum price and above the previous highest bid. Users cannot bid on their own product.

Rails version: 4.2.3

Keywords: Ruby on Rails, Bootstrap

## Run it

* Clone repo `git clone https://github.com/unamaria/ih-selection.git` (or copy files / download zip)
* Install dependencies `bundle install`
* Run migrations `rake db:migrate`
* Run server `rails s`
* Access app on browser `http://localhost:3000/`