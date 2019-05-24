class RemoveAvailabilityDateFromExperiences < ActiveRecord::Migration[5.2]
  def change
    remove_column :experiences, :availability_date
  end
end
