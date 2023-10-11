class Post < ApplicationRecord
    has_many :responses
    has_many :users, through: :responses
    validates :question, presence: true, uniqueness: true
end
