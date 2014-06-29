module('Favorite model');

test('relationship', function () {
  var cuts = ButcherShop.Favorite.metaForProperty('cuts');
  ok(cuts.isRelationship, 'Expecting isRelationship to be true, got false');
  equal(cuts.kind, 'hasMany', 'Expected a hasMany relationship, got: ' + cuts.kind);
});
