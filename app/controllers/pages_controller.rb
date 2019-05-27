class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @experiences = policy_scope(Experience)
  end
end
