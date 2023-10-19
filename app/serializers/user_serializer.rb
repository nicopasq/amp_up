class UserSerializer < ActiveModel::Serializer
  has_many :responses
  attributes  :id, :username, :created_at
end