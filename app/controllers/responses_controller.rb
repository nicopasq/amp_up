class ResponsesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response_msg
        wrap_parameters format: []
    
        def create 
            current_user = User.find(params[:user_id])
            current_user.responses.create!(body: params[:body], post_id:params[:post_id])
            new_response = current_user.responses.last
            render json:new_response
        end
    
        def update
            current_user = User.find(params[:user_id])
            response = current_user.responses.find(params[:id])
            if response
                response.update(body:params[:body])
                render json: response
            end
        end

        def destroy
            current_user = User.find(params[:user_id])
            response = current_user.responses.find(params[:id])
            if response
                response.destroy
                head :no_content
            else
                render json: {error: "Response not found, can not be removed"}
            end
        end
               
        private
    
        def invalid_response_msg invalid
            render json: {errors: invalid.record.errors.full_messages}
        end
    end