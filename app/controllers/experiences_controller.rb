class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :edit, :update, :destroy]

  def index
    @experiences = Experience.all
  end

  def new
    @experience = Experience.new
  end

  def create
    @experience = Experience.new(strong_params)
    if @experience.save
      redirect_to experience_path(@experience)
    else
      render :new
    end
  end

  def edit
  end

  def show
  end

  def update
    if @experience.update(strong_params)
      redirect_to experience_path(@experience)
    else
      render :edit
    end
  end

  def destroy
    @experience.destroy
    redirect_to experiences_path
  end

  private

  def set_experience
    @experience = Experience.find(params[:id])
  end

  def strong_params
    params.require(:experience).permit(:description, :name, :price, :address, :category, :availability_date)
  end
end
