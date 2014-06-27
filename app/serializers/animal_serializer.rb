class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :updated_at
  has_many :primal_cuts

  embed :ids, include: true
end
