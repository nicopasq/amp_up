class SessionsController < ApplicationController

    def create
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            byebug
            render json: user
        else
            render json:{login: "Invalid username or password"}
        end
    end

end
