class UsersController < ApplicationController
    wrap_parameters format: []

    def create
        new_user = User.create(userParams)
        new_user ? render json: new_user : render json: "Could not create account"
    end

    private

    def userParams
        params.permit(:username, :password_digest)
    end
end
