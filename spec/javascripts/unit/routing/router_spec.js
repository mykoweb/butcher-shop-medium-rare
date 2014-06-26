module('Routing specs', {
  setup: function () {
    ButcherShop.reset();
  }
});

test('root route', function () {
  routesTo('/', 'index');
});

test('animals route', function () {
  routesTo('/animals', 'animals.index');
});
