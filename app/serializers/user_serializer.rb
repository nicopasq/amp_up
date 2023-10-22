class UserSerializer < ActiveModel::Serializer
  has_many :posts
  attributes  :id, :username, :created_at
end