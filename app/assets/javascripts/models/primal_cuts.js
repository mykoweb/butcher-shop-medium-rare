ButcherShop.PrimalCut = DS.Model.extend({
  name: DS.attr('string'),
  animal_id: DS.attr('number'),
  cuts: DS.hasMany('cut', { async: true })
});
