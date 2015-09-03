class Product < ActiveRecord::Base
	belongs_to :owner, class_name: "User", foreign_key: :user_id
	has_many :bids
	has_many :interested_users, through: :bids, source: :user

end
