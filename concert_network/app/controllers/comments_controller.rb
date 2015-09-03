class CommentsController < ApplicationController
	def create
		concert = Concert.find(params[:concert_id])
		comment = Comment.new text: params[:comment][:text].strip, concert_id: concert.id
		if comment.save
			redirect_to concert_path(concert)
		else
			render "concerts/show"
		end
	end
end