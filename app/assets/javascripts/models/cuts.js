ButcherShop.Cut = DS.Model.extend({
  name: DS.attr('string'),
  animal_id: DS.attr('number'),
  primal_cut_id: DS.attr('number')
  // primal_cut_name: function () {
  //   var name = this.store.find('primal_cut', this.get('primal_cut_id')).then(function (pcut) {
  //     return pcut.get('name');
  //   });
  //   return name;
  // }.property('primal_cut_id')
});
