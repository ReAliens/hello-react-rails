Rails.application.routes.draw do
  root 'static#index'
  
  namespace :api, defaults: {format: :json} do
    namespace :v1, defaults: {format: :json} do
      resources :greetings
    end
  end
end
