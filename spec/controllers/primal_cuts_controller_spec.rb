require 'spec_helper'

describe PrimalCutsController do
  let(:animal)         { create :animal }
  let(:pcut_attrs)     { { :format => :json, :animal_id => animal.id, :primal_cut => attributes_for(:primal_cut) } }
  let(:bad_pcut_attrs) { { :format => :json, :animal_id => animal.id, :primal_cut => { :name => nil } } }

  describe "GET 'index'" do
    before(:each) { get :index, :animal_id => animal.id, :format => :json }

    subject      { response }

    its(:body)   { should_not be_empty }
    its(:status) { should be 200}
  end

  describe "POST 'create'" do
    before(:each) { post :create, pcut_attrs }

    subject       { response }

    its(:body)    { should_not be_empty }
    its(:status)  { should be 201 }
    its(:headers) { should include "Location" }

    context "with bad params" do
      before(:each) { post :create, bad_pcut_attrs }

      its(:body)    { should_not be_empty }
      its(:status)  { should be 422 }
    end
  end

  context "existing primal cut" do
    let!(:primal_cut)      { create :primal_cut }
    let(:pcut_attrs) { { :id => primal_cut.id, :format => :json, :primal_cut => { :name => "Super Thigh" } } }

    describe "GET 'show'" do
      before(:each) { get :show, :id => primal_cut.id, :format => :json }

      subject       { response }

      its(:body)    { should_not be_empty }
      its(:status)  { should be 200}

      context "with an unknown primal cut" do
        before(:each) { get :show, :id => 9999, :format => :json }

        its("body.strip") { should be_empty }
        its(:status)      { should be 404 }
      end
    end

    describe "PUT 'update'" do
      before(:each) { put :update, pcut_attrs }

      subject       { response }

      its("body.strip") { should be_empty }
      its(:status)      { should be 204 }

      it "updates the primal cut" do
        expect(PrimalCut.find(primal_cut.id).name).to eq pcut_attrs[:primal_cut][:name]
      end

      context "with bad params" do
        before(:each) { put :update, { :id => primal_cut.id, :primal_cut => { :name => nil }, :format => :json } }

        its(:body)    { should_not be_empty }
        its(:status)  { should be 422 }
      end
    end

    describe "DELETE 'destroy'" do
      before(:each) { delete :destroy, :id => primal_cut.id, :format => :json }

      subject       { response }

      its("body.strip") { should be_empty }
      its(:status)      { should be 204 }
    end
  end
end
