class Post < ApplicationRecord
    belongs_to :user
    validates :question, presence: true
    validates :question, uniqueness: true
end
