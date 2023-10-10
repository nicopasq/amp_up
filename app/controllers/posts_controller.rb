class PostsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity
    wrap_parameters format: []
    
    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    private
    
    def post_params
        params.permit(:question)
    end

    def render_unproccesable_entity invalid
        render json: {errors: invalid.record.errors.full_messages}
    end
end
