Rails.application.routes.draw do

	root "products#index"

  resources :users, only: [:index, :show, :new, :create, :destroy]
  resources :products, only: [:index, :create, :new, :show] do
	  resources :bids, only: [:create]
  end

  get "login" => "sessions#new"
  post "login" => "sessions#create"

  get "logout" => "sessions#destroy"
end
