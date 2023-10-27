class User < ApplicationRecord
    has_secure_password

    has_many :responses
    has_many :posts, through: :responses
    
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password_digest, uniqueness: true
end