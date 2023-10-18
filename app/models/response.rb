class Response < ApplicationRecord
    belongs_to :user
    belongs_to :post

    validates :user_id, presence: true
    validates :post_id, presence: true
    validates :body, length:{minimum:1}
end