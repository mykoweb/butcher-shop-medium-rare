class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at
  has_many :primal_cuts
  has_many :cuts

  embed :ids, include: true
end
