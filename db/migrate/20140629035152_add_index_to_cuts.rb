class AddIndexToCuts < ActiveRecord::Migration
  def change
    add_index :cuts, :favorite_id
  end
end
