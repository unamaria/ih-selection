Rails.application.routes.draw do
  root 'concerts#index'

  get ("concerts/search") => "concerts#search_by_price"
  get ("concerts/popular") => "concerts#popular"

  get ("signup") => "users#new"
  post ("signup") => "users#create"
  get ("users/:name") => "users#show", as: "user"

  get ("login") => "sessions#new"
  post ("login") => "sessions#create"

  get ("logout") => "sessions#destroy"
  
  resources :concerts, only: [:index, :new, :create, :show] do
  	resources :comments, only: [:create]
  end

end
