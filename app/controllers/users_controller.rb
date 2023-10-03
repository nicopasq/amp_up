class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity
skip_before_action :authorized, only: :create
wrap_parameters format: []

    def create
        new_user = User.create!(userParams)
        session[:user_id] = user.id
        render json: new_user, status: :created
    end

    def show
        user = User.find(session[:user_id])
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
