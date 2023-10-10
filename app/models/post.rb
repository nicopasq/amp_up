class Post < ApplicationRecord
    validates :question, presence: true
    validates :question, uniqueness: true
end
