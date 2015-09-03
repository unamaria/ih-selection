class UsersController < ApplicationController
	def index
		@users = User.all
	end

	def show
		@user = User.find(params[:id])
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new user_params

		if @user.valid? && @user.present?
			@user.save
			redirect_to user_path(@user), notice: "User #{@user.name} added correctly"
		else
			render :new
		end
	end

	def destroy

	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation)
	end
end