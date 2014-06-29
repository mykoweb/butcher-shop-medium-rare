module('Routing specs', {
  setup: function () {}
});

test('root route', function () {
  routesTo('/', 'index');
});

test('animals route', function () {
  routesTo('/animals', 'animals.index');
});

test('individual animal', function () {
  routesTo('/animals/1', 'animals.show');
});

test('individual primal cut', function () {
  routesTo('/primal_cuts/1', 'primal_cuts.show');
});

test('individual user', function () {
  routesTo('/users/1', 'users.show');
});
