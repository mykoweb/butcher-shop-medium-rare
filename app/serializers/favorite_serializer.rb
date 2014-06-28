class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :cut_id

  embed :ids, include: true
end
