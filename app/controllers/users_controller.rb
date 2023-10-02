class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity
wrap_parameters format: []

    def create
        new_user = User.create!(userParams)
        render json: new_user
    end

    def login
        user = User.find_by(username:params[:usernameVal])
        # byebug
        render json: user
    end

    private 

    def userParams
        params.permit(:username, :password)
    end

    def render_unproccesable_entity invalid
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end
