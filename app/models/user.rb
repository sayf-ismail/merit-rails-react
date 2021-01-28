class User < ApplicationRecord
  has_many :feedposts, foreign_key: :user_id

	# look for the thing where the user is a recipient
	has_many :receiving_points, class_name: "Feedpost", foreign_key: :recipient_id 
	belongs_to :team
end
