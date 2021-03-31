class CreateMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :materials do |t|
      t.string :name
      t.decimal :price
      t.integer :quantity
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
