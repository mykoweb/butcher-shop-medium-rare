// For more information see: http://emberjs.com/guides/routing/

ButcherShop.Router.map(function() {
  this.resource('animals', function () {
    this.route('show', { path: '/:animal_id' });
  });
});
