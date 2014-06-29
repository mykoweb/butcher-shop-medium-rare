module('Users integration');

test('Renders one user', function () {
  visit('/users/1');
  andThen(function () {
    var user = find('#user h2').text();
    var expected_result = 'User: Foo Bar';
    equal(user, expected_result, 'Expected: ' + expected_result + ' got: ' + user);
  });
});
