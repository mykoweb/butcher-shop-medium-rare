class FavoritesController < ApplicationController
  respond_to :json

  before_filter :find_user, only:   [:index, :create]
  before_filter :find_fav,  except: [:index, :create]

  def index
    @favs = @user.favorites.all
    respond_with @favs
  end

  def create
    @fav = @user.favorites.create(fav_params)
    respond_with @fav
  end

  def show
    find_user if params[:user_id]
    # respond_with @fav
    render json: @fav, root: false
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
