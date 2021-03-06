class CreateHours < ActiveRecord::Migration[6.1]
  def change
    create_table :hours do |t|
      t.date :date
      t.decimal :hours
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
