class CutSerializer < ActiveModel::Serializer
  attributes :id, :name, :primal_cut_id, :animal_id, :favorite_id
end
