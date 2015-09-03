class Concert < ActiveRecord::Base
	has_many :comments, dependent: :destroy

	has_attached_file :poster, styles: {:medium => "300x300>", :thumb => "100x100>"}
	validates_attachment_content_type :poster, :content_type => /\Aimage\/.*\Z/

	def self.sort_by_comments(number=10)
		self.all.sort { |x,y| y.comments.count <=> x.comments.count }[0..9]
	end
end
