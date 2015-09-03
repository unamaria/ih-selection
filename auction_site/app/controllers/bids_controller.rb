class BidsController < ApplicationController
	def create
		@product = Product.find(params[:product_id])
		user = User.find_by_email(params[:email])
		@bid = user.bids.new amount: params[:amount], product_id: @product.id

		if @bid.valid? && @bid.present?
			@bid.save
			redirect_to product_path(@product)
		else
			@bids = Bid.where(product_id: @product.id) 
			if !@product.bids.blank? 
				highest_bid = @product.bids.max_by { |bid| bid.amount }
				@winner = User.find(highest_bid.user_id)
			end
			render "products/show"
		end
	end
end