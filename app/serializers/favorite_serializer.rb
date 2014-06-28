class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :cut_id, :cut

  embed :ids, include: true

  # Method that removes the root node of embedded hashes  within JSON
  def cut
    return nil if object.cut.nil?
    cut_obj = object.cut
    cut_hash = { :id => cut_obj[:id], :name => cut_obj[:name] }
    cut_hash.merge!({ :primal_cut_id => cut_obj['primal_cut_id'] }) if cut_obj['primal_cut_id']
    cut_hash.merge!({ :animal_id => cut_obj['animal_id'] }) if cut_obj['primal_cut_id']
    cut_hash
  end
end
