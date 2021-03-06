class PrimalCutSerializer < ActiveModel::Serializer
  attributes :id, :animal_id, :name, :created_at, :updated_at
  has_many :cuts

  embed :ids, include: true
end
