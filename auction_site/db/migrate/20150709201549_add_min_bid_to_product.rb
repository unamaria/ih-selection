class AddMinBidToProduct < ActiveRecord::Migration
  def change
  	add_column :products, :min_bid, :integer
  end
end
