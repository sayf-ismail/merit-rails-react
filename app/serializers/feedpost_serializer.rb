class FeedpostSerializer
  include JSONAPI::Serializer
  attributes :user_id, :recipient_id, :message, :points, :gif_url
end
