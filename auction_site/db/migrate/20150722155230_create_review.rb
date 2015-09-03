class CreateReview < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
    	t.string :description
    	t.references :product
    	t.references :user

    	t.timestamps
    end
  end
end
