class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_many :cuts

  embed :ids, include: true
end
