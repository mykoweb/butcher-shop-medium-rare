ButcherShop.Animal = DS.Model.extend({
  name: DS.attr('string'),
  primalCuts: DS.hasMany('primal_cut', { async: true }),
  cuts: DS.hasMany('cut', { async: true })
});
