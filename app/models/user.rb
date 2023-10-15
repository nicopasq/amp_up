class User < ApplicationRecord
    has_many :responses
    has_many :posts, through: :responses
    
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password_digest, uniqueness: true
end