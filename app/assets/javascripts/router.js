// For more information see: http://emberjs.com/guides/routing/

ButcherShop.Router.map(function() {
  this.resource('animals', function () {
    this.route('show', { path: '/:animal_id' });
  });
  this.resource('primal_cuts', function () {
    this.route('show', { path: '/:primal_cut_id' });
  });
  this.resource('cuts', function () {
    this.route('show', { path: '/:cut_id' });
  });
  this.resource('users', function () {
    this.route('show', { path: '/:user_id' });
  });
});
