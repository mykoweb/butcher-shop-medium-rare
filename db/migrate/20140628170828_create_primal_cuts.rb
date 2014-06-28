class CreatePrimalCuts < ActiveRecord::Migration
  def change
    create_table :primal_cuts do |t|
      t.string :name
      t.integer :animal_id

      t.timestamps
    end

    add_index :primal_cuts, [:animal_id], name: 'index_primal_cuts_on_animal_id'
  end
end
