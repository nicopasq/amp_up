class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
    skip_before_action :authorized, only: :create
    wrap_parameters format: []
    
        def create
            new_user = User.create!(user_params)
            session[:user_id] = new_user.id
            render json: new_user, only: [:id, :username], status: :created
        end
    
        def show
            user = User.find(session[:user_id])
            render json: user
        end
    
        private 
    
        def user_params
            params.permit(:username, :password)
        end
    
        def render_unproccesable_entity invalid
            render json: {errors: invalid.record.errors.full_messages}, status: 422
        end
        
        def render_record_not_found
            render json: {errors:"User is not logged in"}, status: 404
        end
    end