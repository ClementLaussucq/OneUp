class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :edit, :update, :destroy]
  before_action :set_experience, only: [:new, :create]
  # pundit to be added
  skip_after_action :verify_authorized, except: :index, unless: :skip_pundit?
  skip_after_action :verify_policy_scoped, only: :index, unless: :skip_pundit?

  def index
    @bookings = Booking.all
  end

  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.experience = @experience
    @booking.user = current_user

    @experience.bookings.each do |booking|
      if booking.date == @booking.date
        flash[:error] = "This date has already been booked! Sorry"
        render :new and return
      end
    end
    @booking.status = "Pending"

    if @booking.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
    update
  end

  def show
  end

  def update
    # @booking.update(booking_params)
    @booking.status = "Confirmed"
    @booking.save
    redirect_to dashboard_path
  end

  def destroy
    @booking.destroy
    redirect_to dashboard_path
  end

  private

  def booking_params
    params.require(:booking).permit(:date)
  end

  def set_booking
    @booking = Booking.find(params[:id])
  end

  def set_experience
    @experience = Experience.find(params[:experience_id])
  end
end
