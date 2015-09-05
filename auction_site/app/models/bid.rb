class Bid < ActiveRecord::Base
	belongs_to :product
	belongs_to :user

	validate :greater_than_min_bid
	validate :greater_than_current_max_bid

	def greater_than_min_bid
		if amount <= product.min_bid
      errors.add(:amount, "can't be smaller than minimum bid")
    end
	end

	def greater_than_current_max_bid
		product = Product.find(product_id)
		if current_max_bid = product.bids.max_by { |bid| bid.amount }
			current_max_bid_amount = current_max_bid.amount
			if amount <= current_max_bid_amount
				errors.add(:amount, "can't be smaller than current maximum bid")
			end
		end
	end
end
