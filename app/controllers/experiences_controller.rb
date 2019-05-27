class ExperiencesController < ApplicationController
  before_action :set_experience, only: [:show, :edit, :update, :destroy]

  def index
    @experiences = policy_scope(Experience)
  end

  def new
    @experience = Experience.new

    authorize @experience
  end

  def create
    @experience = Experience.new(strong_params)
    @experience.user = current_user
    authorize @experience

    if @experience.save
      redirect_to experience_path(@experience)
    else
      render :new
    end
  end

  def edit
  end

  def show
    authorize @experience
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
    params.require(:experience).permit(:description, :name, :price, :address, :category)
  end
end
