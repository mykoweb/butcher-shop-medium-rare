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
      this.toggleProperty('addingNewPrimalCut');
    },
    saveNewPrimalCut: function () {
      var self = this;
      var new_name       = self.get('new_name');
      var animal_id      = self.get('id');
      var new_primal_cut = self.store.createRecord('primal_cut', { name: new_name, animal_id: animal_id });
      new_primal_cut.save().then(
        function () {
          self.get('primalCuts').pushObject(new_primal_cut);
          self.set('new_name', '');
          self.toggleProperty('addingNewPrimalCut');
        },
        function () { alert('Unable to save record'); }
      );
    }
  }
});
