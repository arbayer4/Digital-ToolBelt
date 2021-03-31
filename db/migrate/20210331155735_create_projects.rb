class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :project_name
      t.string :client_name
      t.string :client_phone
      t.string :address
      t.text :description
      t.integer :bid
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
