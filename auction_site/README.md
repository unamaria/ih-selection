# Auction site

eBay seems to have done pretty well, but you know what's wrong with it?

It's not a Rails app!!

We're going to fix that. We're going to create an auction site where users can submit products to sell and other users can bid on them. At the deadline set by the seller, the buyer with the highest bid wins the item.

## Iteration 1 - Post products

Create a new Rails project. Make models and controllers for users and products.

### User

The user should have a name and an email address. Validate that the email address is present and unique.
A user has many products and a product belongs to one user.
The users controller should have show, create and destroy actions.

### Product

A product should have a title, a description, and a deadline for bidding. Each product belongs to a user (and should have a user_id).
A product has many bids and a bid belongs to one product.
The products controller should have index, show, create and destroy actions.
Make a new product page where users can fill out a form to post a new product - the form should include the title, description, and deadline to bid.

Make an index page where all of the products are listed and a product detail page for each product.

## Iteration 2 - Bidding

Create a new model and controller for bids.

### Bid

A bid should have an amount and and the ID of the user who made the bid (and a product_id).
A bid belongs to one product.
The bids controller should just have the create action.
On each product's page, there should be a form where users can bid on the product. To bid on a product, the users only have to enter their email address and the amount of their bid. Find the user_id of the user from their email address.

The product page should display a list of all the bids that have been made for that product and the name of the user that made each bid.

When the deadline for bidding is reached, users should no longer be able to bid on the product and the product page should show who the winning bidder is (the user who made the highest bid).

## Iteration 3 - Better bids

Make a migration that adds a minimum bid column to the products table in the database. When users create a product, they should set a minimum price. Then when other users make a bid, it should only be saved if is above the minimum price and above the previous highest bid. Users cannot bid on their own product.