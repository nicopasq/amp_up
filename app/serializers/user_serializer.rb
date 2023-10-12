class UserSerializer < ActiveModel::Serializer
  has_many :responses
  attributes  :username
end
