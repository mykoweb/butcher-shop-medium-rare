module('Animal Model', {
  setup: function () {},
  teardown: function () {}
});

test('attributes', function () {
  respondsTo('Animal', 'name', 'string');
});

test('relationships', function () {
  var pcuts = ButcherShop.Animal.metaForProperty('primalCuts');
  ok(pcuts.isRelationship, 'Expecting isRelationship to be true, got false');
  equal(pcuts.kind, 'hasMany', 'Expected a hasMany relationship, got: ' + pcuts.kind);
});
