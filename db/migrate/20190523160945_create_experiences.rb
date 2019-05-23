class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.text :description
      t.text :address
      t.float :price
      t.references :user, foreign_key: true
      t.string :category
      t.string :name
      t.date :availability_date

      t.timestamps
    end
  end
end
