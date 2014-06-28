class Cut < ActiveRecord::Base
  include ActiveModel::ForbiddenAttributesProtection

  has_many :favorites
  has_many :users, through: :favorites
  belongs_to :primal_cut
  belongs_to :animal

  validates :name, :presence => true
end
