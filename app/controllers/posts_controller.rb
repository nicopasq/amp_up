class PostsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity

    wrap_parameters format: []
    
    def create
        user = User.find(params[:currentUser][:id])
            new_post = user.posts.create!(post_params)
            render json: new_post, status: :created
    end

    def index
        posts = Post.all
        if posts.count > 0
            render json: posts
        else
            render json: {errors: 'There a currently no discussions'}
        end
    end
    private
    
    def post_params
        params.permit(:question)
    end

    def render_unproccesable_entity invalid
        render json: {errors: invalid.record.errors.full_messages}
    end
end
