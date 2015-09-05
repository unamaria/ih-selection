class ProductsController < ApplicationController
	def index
		@products = Product.all
	end

	def show
		@product = Product.find(params[:id])
		@bid = Bid.new
		@bids = Bid.where(product_id: @product.id) 
	end

	def new
		@product = Product.new
	end

	def create
		@product = Product.new product_params		
		if current_user.products << @product
			flash[:success] = "Product sucessfully added!"
			redirect_to product_url(@product)
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