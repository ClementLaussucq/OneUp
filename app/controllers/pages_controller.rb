class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @experiences = policy_scope(Experience)
  end

  def dashboard
    @experiences = Experience.where(user_id: current_user)
    @bookings = Booking.where(user_id: current_user)
  end
end
