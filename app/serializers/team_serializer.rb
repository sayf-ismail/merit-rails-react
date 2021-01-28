class TeamSerializer
  include JSONAPI::Serializer
  attribute :name

  has_many :users
end
