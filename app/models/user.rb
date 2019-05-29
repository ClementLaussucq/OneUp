  class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :experiences, dependent: :destroy
  has_many :bookings, dependent: :destroy
  validates :first_name, :last_name, presence: true
  mount_uploader :photo, PhotoUploader
end
