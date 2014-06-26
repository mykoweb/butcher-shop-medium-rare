ButcherShop.ApplicationStore = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
ButcherShop.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});
