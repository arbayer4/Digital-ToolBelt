class UsersController < ApplicationController

  
  def create
    @user = User.new(user_params)
    puts @user.valid?
    puts @user.errors.objects.first.full_message

    if @user.save
      @token = encode({id:@user.id})
      render json:{
        user: @user.attributes.except("password_digest"),
        token:@token

      }, status: :created
    else

      render json: @user.errors.objects.first.full_message, status: :unprocessable_entity
    end
  end


  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
