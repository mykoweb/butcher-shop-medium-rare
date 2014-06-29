class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :created_at, :updated_at

  has_many :favorites

  embed :ids, include: true
end
