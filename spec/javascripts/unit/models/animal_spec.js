module('Animal Model', {
  setup: function () {},
  teardown: function () {}
});

test('attributes', function () {
  respondsTo('Animal', 'name', 'string');
});
