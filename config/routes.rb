Rails.application.routes.draw do
  get 'bookings/index'
  get 'bookings/new'
  get 'bookings/create'
  get 'bookings/edit'
  get 'bookings/show'
  get 'bookings/update'
  get 'bookings/destroy'
  get 'experiences/index'
  get 'experiences/new'
  get 'experiences/create'
  get 'experiences/edit'
  get 'experiences/show'
  get 'experiences/update'
  get 'experiences/destroy'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :experiences do
    resources :bookings, only: [:index, :create, :new]
  end
  resources :bookings, only: [:show, :edit, :update, :destroy]
end

