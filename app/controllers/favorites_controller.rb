class FavoritesController < ApplicationController
  respond_to :json

  before_filter :find_user, only:   [:index, :create]
  before_filter :find_fav,  except: [:index, :create]

  def index
    @favs = @user.favorites.all
    respond_with @favs
  end

  def create
    @fav = @user.favorites.create
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
      @user = User.find params[:user_id]
    end

    def find_fav
      @fav = Favorite.find params[:id]
    rescue ActiveRecord::RecordNotFound
      head 404
    end

    def fav_params
      params.require(:favorite).permit(:cut_id)
    end
end
