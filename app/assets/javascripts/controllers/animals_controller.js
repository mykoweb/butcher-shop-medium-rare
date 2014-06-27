ButcherShop.AnimalsIndexController = Ember.ArrayController.extend({
  actions: {
    addNewAnimal: function () {
      this.toggleProperty('addingNewAnimal');
    },
    saveNewAnimal: function () {
      var self = this;
      var new_name   = self.get('new_name');
      var new_animal = self.store.createRecord('animal', { name: new_name });
      new_animal.save().then(
        function () {
          self.set('new_name', '');
          self.toggleProperty('addingNewAnimal');
        },
        function () { alert('Unable to save record'); }
      );
    },
    cancelNewAnimal: function () {
      this.set('new_name', '');
      this.toggleProperty('addingNewAnimal');
    },
    deleteAnimal: function (animal) {
      animal.destroyRecord();
    }
  }
});

ButcherShop.AnimalsShowController = Ember.ObjectController.extend({
  actions: {
    addNewPrimalCut: function () {
      this.toggleProperty('addingNewAnimal');
    }
  }
});
