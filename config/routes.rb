Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :teams, param: :name
      resources :users, param: :id
      # , :email, :image_url, :points_to_give, :points_to_redeem, :name, :team_id,
      resources :feedposts, param: :recipient_id
      # , :user_id,  :message, :points, :gif_url
    end
  end

  get '*path', to: 'pages#index', via: :all
end
