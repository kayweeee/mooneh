Rails.application.routes.draw do
  # get 'account/index'
  root "things#index"
  get 'things/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/patients', to: 'things#index'
  # get '/accounts', to: 'account#index'
  # get '/accounts/:id', to: 'account#show'
  resources :accounts
  delete '/delallacc', to: 'accounts#delall'
end