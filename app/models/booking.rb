class Booking < ApplicationRecord
  belongs_to :user_id
  belongs_to :experience_id
  validates :date
end
