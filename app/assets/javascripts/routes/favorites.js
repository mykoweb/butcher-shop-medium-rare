ButcherShop.FavoritesShowRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('favorite', params.favorite_id);
  }
});
