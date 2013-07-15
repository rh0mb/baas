class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :height
      t.integer :width

      t.timestamps
    end
  end
end
