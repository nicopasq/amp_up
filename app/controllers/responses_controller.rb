class ResponsesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response_msg
        wrap_parameters format: []
    
        def create 
            user = User.find(params[:user_id])
            user.responses.create(body: params[:body], post_id:params[:post_id])
            new_response = user.responses.last
            render json: new_response, status: :accepted
        end
    
        def destroy
                if session[:user_id] == params[:user_id]
                    user = User.find(params[:user_id])
                    response = user.responses.find(params[:response_id])
                    user.responses.destroy(response)
                    head :no_content
                else
                    render json: {e: false}, status: 200
                end
                # user = User.find(params[:user_id])
                # response = user.responses.find(params[:response_id])
                # render json: user
        end
        private
    
        def invalid_response_msg invalid
            render json: {errors: invalid.record.errors.full_messages}
        end
    end