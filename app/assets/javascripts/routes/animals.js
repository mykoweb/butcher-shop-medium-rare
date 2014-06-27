ButcherShop.AnimalsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.findAll('animal');
  }
});
