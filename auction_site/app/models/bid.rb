class Bid < ActiveRecord::Base
	belongs_to :product
	belongs_to :user

	validate :greater_than_min_bid
	validate :greater_than_current_max_bid
	validate :not_from_product_owner

	def greater_than_min_bid
		if amount <= product.min_bid
      errors.add(:amount, "can't be smaller than minimum bid")
    end
	end

	def greater_than_current_max_bid
		product = Product.find(product_id)
		current_max_bid = product.bids.max_by { |bid| bid.amount }
		current_max_bid_amount = current_max_bid.amount
		if amount <= current_max_bid_amount
			errors.add(:amount, "can't be smaller than current maximum bid")
		end
	end

	def not_from_product_owner
		owner_id = Product.find(product_id).user_id
		if user_id == owner_id
			errors.add(:email, "belongs to product owner, product owner can not bid")
		end
	end
end
