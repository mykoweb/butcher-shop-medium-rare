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
