class Post < ApplicationRecord
    validates :question, presence: true, uniqueness: true
end
