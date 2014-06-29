module('User model');

test('User first name', function () {
  respondsTo('User', 'first_name', 'string');
});

test('User last name', function () {
  respondsTo('User', 'last_name', 'string');
});

test('User email', function () {
  respondsTo('User', 'email', 'string');
});

// test('relationship', function () {
//   var cuts = ButcherShop.PrimalCut.metaForProperty('cuts');
//   ok(cuts.isRelationship, 'Expecting isRelationship to be true, got false');
//   equal(cuts.kind, 'hasMany', 'Expected a hasMany relationship, got: ' + cuts.kind);
// });
