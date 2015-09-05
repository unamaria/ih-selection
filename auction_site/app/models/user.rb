class User < ActiveRecord::Base
	has_many :products
	has_many :bids
	has_many :bidded_products, through: :bids, source: :product

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }	
  has_secure_password
	validates :password, presence: true, length: { minimum: 6 }
end
