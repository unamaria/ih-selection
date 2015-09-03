class User < ActiveRecord::Base
	has_many :products
	has_many :bids
	has_many :bidded_products, through: :bids, source: :product

	has_secure_password
	validates :email, presence: true, uniqueness: true
end
