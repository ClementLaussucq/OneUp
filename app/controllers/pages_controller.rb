class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

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
end
