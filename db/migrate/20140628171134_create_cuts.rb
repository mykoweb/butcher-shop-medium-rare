class CreateCuts < ActiveRecord::Migration
  def change
    create_table :cuts do |t|
      t.string :name
      t.integer :primal_cut_id
      t.integer :animal_id

      t.timestamps
    end

    add_index :cuts, [:animal_id], name: 'index_cuts_on_animal_id'
    add_index :cuts, [:primal_cut_id], name: 'index_cuts_on_primal_cut_id'
  end
end
