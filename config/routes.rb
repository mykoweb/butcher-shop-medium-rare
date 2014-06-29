ButcherShop::Application.routes.draw do
  root to: 'assets#index'
  get 'assets/index'

  resources :users, :except => [:new, :edit]

  resources :animals, :except => [:new, :edit] do
    resources :primal_cuts, :only => [:index, :create]
    resources :cuts,        :only => [:index, :create]
  end

  resources :primal_cuts, :only => [:show, :update, :destroy, :create] do
    resources :cuts, :only => [:index, :create]
  end

  resources :cuts, :only => [:show, :update, :destroy, :create]

  resources :users, only: [:show] do
    resources :favorites, only: [:index, :create]
  end

  resources :favorites, only: [:show, :update, :destroy]
end
