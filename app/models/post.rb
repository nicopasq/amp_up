class Post < ApplicationRecord
    belongs_to :user
    validates :question, presence: true, uniqueness: true
end
