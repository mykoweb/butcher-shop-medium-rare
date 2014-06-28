ButcherShop.User = DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  cuts: DS.hasMany('cut', { async: true })
});
