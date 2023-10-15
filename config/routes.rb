Rails.application.routes.draw do

  resources :responses, only: [:create]
  delete '/responses', to: 'responses#destroy'
  resources :posts, only: [:create, :index]

  resources :users, only: [:create]
  get '/auth', to: 'users#show'

  post '/login', to: 'sessions#create';
  delete '/login', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
