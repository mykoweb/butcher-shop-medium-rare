module('Users integration');

test('Renders one user', function () {
  visit('/users/1');
  andThen(function () {
    var user = find('#user h2').text();
    var expected_result = 'User: Foo Bar';
    equal(user, expected_result, 'Expected: ' + expected_result + ' got: ' + user);
  });
});

test('Should have links to favorites', function () {
  visit('/users/1');
  andThen(function () {
    var fav = find('table td a').length;
    ok(fav == 2, 'Incorrect number of links to favorites');
  });
});
