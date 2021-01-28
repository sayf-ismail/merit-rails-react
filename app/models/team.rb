class Team < ApplicationRecord
  has_many :users
  has_many :feedposts, through: :users
end
