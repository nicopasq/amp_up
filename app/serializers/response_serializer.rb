class ResponseSerializer < ActiveModel::Serializer
  belongs_to :post
  belongs_to :user
  attributes :id, :body, :user, :post_id
end