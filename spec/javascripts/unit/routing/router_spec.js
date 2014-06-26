module('Routing specs', {
  setup: function () {
    ButcherShop.reset();
  }
});

test('root route', function () {
  visit('/');
  andThen(function () {
    var current_route = ButcherShop.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, 'index', 'Expected index got:' + current_route);
  });
});

test('animals route', function () {
  visit('/animals');
  andThen(function () {
    var current_route = ButcherShop.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, 'animals.index', 'Expected animals.index got:' + current_route);
  });
});
