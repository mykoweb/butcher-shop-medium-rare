module('Primal cut model');

test('primal cut attribute', function () {
  respondsTo('PrimalCut', 'name', 'string');
});

test('relationship', function () {
  var cuts = ButcherShop.PrimalCut.metaForProperty('cuts');
  ok(cuts.isRelationship, 'Expecting isRelationship to be true, got false');
  equal(cuts.kind, 'hasMany', 'Expected a hasMany relationship, got: ' + cuts.kind);
});
