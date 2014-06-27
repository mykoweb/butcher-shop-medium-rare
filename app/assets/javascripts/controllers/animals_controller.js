ButcherShop.AnimalsIndexController = Ember.ArrayController.extend({
  actions: {
    addNewAnimal: function () {
      this.toggleProperty('addingNewAnimal');
    }
  }
});
