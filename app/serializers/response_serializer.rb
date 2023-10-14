class ResponseSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :post
  attributes :id, :body, :user, :post
end
