require 'spec_helper'

describe CutsController do
  let(:animal)        { create :animal }
  let(:pcut)          { create :primal_cut }
  let(:animal_cut_attrs) { { :format => :json, :animal_id => animal.id, :cut => attributes_for(:cut) } }
  let(:pcut_cut_attrs)   { { :format => :json, :primal_cut_id => pcut.id, :cut => attributes_for(:cut) } }
  let(:bad_animal_cut_attrs) { { :format => :json, :animal_id => animal.id, :cut => { :name => nil } } }
  let(:bad_pcut_cut_attrs)   { { :format => :json, :primal_cut_id => pcut.id, :cut => { :name => nil } } }

  describe "GET 'index'" do
    context 'from animal' do
      before(:each) { get :index, :animal_id => animal.id, :format => :json }

      subject      { response }

      its(:body)   { should_not be_empty }
      its(:status) { should be 200}
    end

    context 'from primal_cut' do
      before(:each) { get :index, :primal_cut_id => pcut.id, :format => :json }

      subject      { response }

      its(:body)   { should_not be_empty }
      its(:status) { should be 200}
    end
  end

  describe "POST 'create'" do
    context 'from animal' do
      before(:each) { post :create, animal_cut_attrs }

      subject       { response }

      its(:body)    { should_not be_empty }
      its(:status)  { should be 201 }
      its(:headers) { should include "Location" }

      context "with bad params" do
        before(:each) { post :create, bad_animal_cut_attrs }

        its(:body)    { should_not be_empty }
        its(:status)  { should be 422 }
      end
    end

    context 'from primal_cut' do
      before(:each) { post :create, pcut_cut_attrs }

      subject       { response }

      its(:body)    { should_not be_empty }
      its(:status)  { should be 201 }
      its(:headers) { should include "Location" }

      context "with bad params" do
        before(:each) { post :create, bad_pcut_cut_attrs }

        its(:body)    { should_not be_empty }
        its(:status)  { should be 422 }
      end
    end
  end

  context "existing cut" do
    let!(:cut)      { create :cut }
    let(:cut_attrs) { { :id => cut.id, :format => :json, :cut => { :name => "Rib Steak" } } }

    describe "GET 'show'" do
      before(:each) { get :show, :id => cut.id, :format => :json }

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
      before(:each) { put :update, cut_attrs }

      subject       { response }

      its("body.strip") { should be_empty }
      its(:status)      { should be 204 }

      it "updates the cut" do
        expect(Cut.find(cut.id).name).to eq cut_attrs[:cut][:name]
      end

      context "with bad params" do
        before(:each) { put :update, { :id => cut.id, :cut => { :name => nil }, :format => :json } }

        its(:body)    { should_not be_empty }
        its(:status)  { should be 422 }
      end
    end

    describe "DELETE 'destroy'" do
      before(:each) { delete :destroy, :id => cut.id, :format => :json }

      subject       { response }

      its("body.strip") { should be_empty }
      its(:status)      { should be 204 }
    end
  end
end
