class FavoriteSerializer < ActiveModel::Serializer
  attributes :id

  embed :ids, include: true

  # Method that removes the root node of embedded hashes  within JSON
  def favorites
    # return nil if object.cut.nil?
    # cut_obj = object.cut
    # cut_hash = { :id => cut_obj[:id], :name => cut_obj[:name] }
    # cut_hash.merge!({ :primal_cut_id => cut_obj['primal_cut_id'] }) if cut_obj['primal_cut_id']
    # cut_hash.merge!({ :animal_id => cut_obj['animal_id'] }) if cut_obj['primal_cut_id']
    # [cut_hash]
    obj = object.cut
    { 
      animal_id: obj['animal_id'],
      primal_cut_id: obj['primal_cut_id'],
      name: obj['name'],
    }
  end
end
