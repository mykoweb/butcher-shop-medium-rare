class FavoritesController < ApplicationController
  respond_to :json

  before_filter :find_user, only:   [:show, :create]
  before_filter :find_fav,  except: [:show, :create]

  def create
    @fav = @user.favorites.create(fav_params)
    respond_with @fav
  end

  def show
    respond_with @fav
  end

  def update
    @fav.update_attributes fav_params
    respond_with @fav
  end

  def destroy
    @fav.destroy
    head 204
  end

  protected
    def find_user
      user_id = params[:user_id]
      @user = User.find user_id
    rescue ActiveRecord::RecordNotFound
      head 404
    end

    def find_fav
      @fav = Favorite.find params[:id]
    end

    def fav_params
      params.require(:favorite).permit(:cut_id)
    end
end
