Rails.application.routes.draw do
  
  resources :hours
  resources :materials
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
