class ProductsController < ApplicationController
	def index
		@products = Product.all
	end

	def show
		@product = Product.find(params[:id])
		@bid = Bid.new
		@bids = Bid.where(product_id: @product.id) 
		# if !@product.bids.blank? 
		# 	highest_bid = @product.bids.max_by { |bid| bid.amount }
		# 	@winner = User.find(highest_bid.user_id)
		# end
	end

	def new
		@user = User.find(params[:user_id])
		@product = Product.new
	end

	def create
		@user = User.find(params[:user_id])
		@product = Product.new product_params

		if @product.valid? && @product.present?
			@product.user_id = params[:user_id]
			@product.save
			redirect_to user_path(@user), notice: "Product sucessfully added"
		else
			render :new
		end
	end

	def destroy

	end

	private

	def product_params
		params.require(:product).permit(:title, :description, :min_bid, :deadline)
	end
end