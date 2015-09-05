class Product < ActiveRecord::Base
	belongs_to :owner, class_name: "User", foreign_key: :user_id
	has_many :bids
	has_many :interested_users, through: :bids, source: :user

	validates :title, :description, :min_bid, :deadline, presence: true
	validate :deadline_cannot_be_past

	def deadline_cannot_be_past
		if deadline && deadline < Date.today
			errors.add(:deadline, "can't be in the past")
		end
	end
end
