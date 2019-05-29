class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :index]

  def home
    @experiences = policy_scope(Experience)
    @experiences = Experience.where.not(latitude: nil, longitude: nil)
    @markers = @experiences.map do |experience|
      {
        lat: experience.latitude,
        lng: experience.longitude
      }
    end
  end

  def dashboard
    @experiences = Experience.where(user_id: current_user)
    @bookings_user = []
    @experiences.each do |experience|
      @bookings_user << Booking.where(experience_id: experience.id)
    end
    @bookings = Booking.where(user_id: current_user)
  end
end
