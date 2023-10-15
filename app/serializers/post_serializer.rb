class PostSerializer < ActiveModel::Serializer
  has_many :responses
  has_many :users, through: :responses
  attributes :id, :question
end