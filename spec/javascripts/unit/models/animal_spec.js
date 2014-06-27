module('Animal Model', {
  setup: function () {},
  teardown: function () {
    ButcherShop.reset();
  }
});

test('attributes', function () {
  respondsTo('Animal', 'name', 'string');
});
