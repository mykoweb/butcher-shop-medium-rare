ButcherShop.Favorite = DS.Model.extend({
  cuts: DS.hasMany('cut', { async: true })
});
