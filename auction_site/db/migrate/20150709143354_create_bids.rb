class CreateBids < ActiveRecord::Migration
  def change
    create_table :bids do |t|
      t.integer :amount
      t.integer :user_id
      t.integer :product_id

      t.timestamps null: false
    end
  end
end
