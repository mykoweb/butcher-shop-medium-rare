ButcherShop.PrimalCutsShowRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('primalCut', params.primal_cut_id);
  }
});
