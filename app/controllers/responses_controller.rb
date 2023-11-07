class ResponsesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response_msg
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
        wrap_parameters format: []
    
        def create 
            current_user = User.find_by(id: session[:user_id])
                current_user.responses.create!(body: params[:body], post_id:params[:post_id])
                new_response = current_user.responses.last
                render json:new_response, status: :created
        end
    
        def update
            current_user = User.find_by(id: session[:user_id])
            response = current_user.responses.find(params[:id])
            if response
                response.update(body:params[:body])
                render json: response, status: :accepted
            end
        end

        def destroy
            current_user = User.find_by(id: session[:user_id])
            response = current_user.responses.find(params[:id])
            if response
                response.destroy
                head :no_content
            else
                render json: {error: "Response not found, can not be removed"}, status: 422
            end
        end
               
        private
    
        def invalid_response_msg invalid
            render json: {errors: invalid.record.errors.full_messages}, status: 422
        end

        def user_not_found
            render json: {errors: "User must be logged in to continue"}, status: 401
        end
    end