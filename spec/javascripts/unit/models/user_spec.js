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

test('relationship', function () {
  var favs = ButcherShop.User.metaForProperty('favorites');
  ok(favs.isRelationship, 'Expecting isRelationship to be true, got false');
  equal(favs.kind, 'hasMany', 'Expected a hasMany relationship, got: ' + favs.kind);
});
