class ConcertsController < ApplicationController
	before_action :admin_only, only: [:create, :new]


	def index
		today = DateTime.current
		
		beginning_of_today = today.at_beginning_of_day
		end_of_today = today.at_end_of_day
		
		@today_concerts = Concert.where("date >= ? AND date < ?", beginning_of_today, end_of_today)
		@today_to_end_month_concerts = Concert.where("date > ? AND date <= ?", today, today.end_of_month.end_of_day)
	end

	def show
		@concert = Concert.find(params[:id])
		@comments = Comment.where(concert_id: @concert.id)
		@comment = Comment.new
	end

	def new
		@concert = Concert.new
	end

	def create
		concert = Concert.new concert_params
		if concert.save
			redirect_to concert_path(concert)
		else
			render :new
		end
	end

	def search_by_price
		@amount = params[:amount]
		today = DateTime.current
		if !@amount.blank?
			@concerts = Concert.where("price <= ? AND date >= ?", @amount, today)
		else
			flash.now[:message] = "Amount can't be blank"
		end
	end

	def popular
		@concerts = Concert.sort_by_comments
	end

	private

	def concert_params
		params.require(:concert).permit(:band, :venue, :city, :date, :price, :description, :poster)
	end
end