class ResponsesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response_msg
        wrap_parameters format: []
    
        def create 
            post = Post.find(params[:post_id])
            post.responses.create!(body: params[:body], user_id:params[:user_id])
            new_response = post.responses.last
            render json: new_response, status: :accepted
        end
    
        def update
            if session[:user_id] == params[:user_id]
                response =Response.find(params[:response_id])
                response.update!(body: params[:body])
            end
            byebug
        end

        def destroy
            if session[:user_id] == params[:user_id]
                response = Response.find(params[:response_id])
                response.destroy
                head :no_content
            end
            # else
            #     render json: {e: false}, status: 200
        end
               
        private
    
        def invalid_response_msg invalid
            render json: {errors: invalid.record.errors.full_messages}
        end
    end