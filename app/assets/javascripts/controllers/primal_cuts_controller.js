ButcherShop.PrimalCutsShowController = Ember.ObjectController.extend({
  actions: {
    addNewCut: function () {
      this.toggleProperty('addingNewCut');
    },
    saveNewCut: function () {
      var self = this;
      var new_name      = self.get('new_name');
      var primal_cut_id = self.get('id');
      var new_cut       = self.store.createRecord('cut', { name: new_name, primal_cut_id: primal_cut_id });
      new_cut.save().then(
        function () {
          self.get('cuts').pushObject(new_cut);
          self.set('new_name', '');
          self.toggleProperty('addingNewCut');
        },
        function () { alert('Unable to save record'); }
      );
    },
    cancelNewCut: function () {
      this.set('new_name', '');
      this.toggleProperty('addingNewCut');
    },
    deleteCut: function (cut) {
      cut.destroyRecord();
    }
  }
});
