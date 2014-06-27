ButcherShop.AnimalsIndexController = Ember.ArrayController.extend({
  actions: {
    addNewAnimal: function () {
      this.toggleProperty('addingNewAnimal');
    },
    saveNewAnimal: function () {
      var new_name   = this.get('new_name');
      var new_animal = this.store.createRecord('animal', { name: new_name });
      var self = this;
      new_animal.save().then(
        function () {
          self.set('new_name', '');
          self.toggleProperty('addingNewAnimal');
        },
        function () { alert('Unable to save record'); }
      );
    }
  }
});
