class UsersController < ApplicationController
	before_action :authorize_user, only: [:show]

	def new
		@user = User.new
	end

	def create
		user = User.new user_params
		if user.save
			name = user.name
			session[:user_id] = user.id
			redirect_to user_path(name)
		else
			render :new
		end
	end

	def show
		@user = User.find_by(session[:user_id])
	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation)
	end
end