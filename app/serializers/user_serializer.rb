class UserSerializer
  include JSONAPI::Serializer
  attributes :username, :email, :image_url, :points_to_give, :points_to_redeem, :name, :team_id

  has_many :feedposts
end
