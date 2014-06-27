ButcherShop.AnimalsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.findAll('animal');
  }
});

ButcherShop.AnimalsShowRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('animal', params.animal_id);
  }
});
