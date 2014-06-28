require 'spec_helper'

describe Cut do
  it { should be_a_kind_of ActiveModel::ForbiddenAttributesProtection }

  it { should validate_presence_of :name }

  it { should have_many :favorites }
  it { should have_many(:users).through(:favorites) }
  it { should belong_to :animal }
  it { should belong_to :primal_cut }
end
