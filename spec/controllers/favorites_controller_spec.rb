require 'spec_helper'

describe FavoritesController do
  let(:user)          { create :user }
  let(:fav_attrs)     { { :format => :json, :user_id => user.id, :favorite => attributes_for(:favorite) } }

  describe "POST 'create'" do
    before(:each) { post :create, fav_attrs }

    subject       { response }

    its(:body)    { should_not be_empty }
    its(:status)  { should be 201 }
    its(:headers) { should include "Location" }
  end

  context "existing favorite" do
    let!(:fav)      { create :favorite }
    let(:fav_attrs) { { :id => fav.id, :format => :json } }

    describe "GET 'show'" do
      before(:each) { get :show, :id => fav.id, :user_id => fav.user_id, :format => :json }

      subject       { response }

      its(:body)    { should_not be_empty }
      its(:status)  { should be 200}

      context "with an unknown favorite" do
        before(:each) { get :show, :id => 9999, :format => :json }

        its("body.strip") { should be_empty }
        its(:status)      { should be 404 }
      end
    end

    describe "DELETE 'destroy'" do
      before(:each) { delete :destroy, :id => fav.id, :format => :json }

      subject       { response }

      its("body.strip") { should be_empty }
      its(:status)      { should be 204 }
    end
  end
end
