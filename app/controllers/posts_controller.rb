class PostsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unproccesable_entity
skip_before_action :authorized, only: :index
    wrap_parameters format: []
    
    def create
        post = Post.create!(params[:question])
        render json: post

        # user = User.find(params[:currentUser])
        #     # new_post = user.posts.create!(params[:question])
        #     # render json: new_post, status: :created
        # post = Post.create(question: params[:question])
        # render json: user
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

    def render_unproccesable_entity invalid
        render json: {errors: invalid.record.errors.full_messages}
    end
end
