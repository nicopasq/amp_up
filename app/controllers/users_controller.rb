class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid with: :invalidUserCreation
    wrap_parameters format: []

    def create
        new_user = User.create!(userParams)
        render json: new_user, status: :created
    end

    private

    def userParams
        params.permit(:name, :password_digest)
    end

    def invalidUserCreation invalid
        render json: {errors: invalid.record.errors.full_messages }, status: 422
    end
end
