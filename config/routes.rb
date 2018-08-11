Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :characters, only: [:index, :show, :create, :new]

  namespace :api do
    namespace :v1 do
      resources :characters, only: [:index, :show, :create, :new]
      resources :class_types, only:[:index]
    end
  end

end
