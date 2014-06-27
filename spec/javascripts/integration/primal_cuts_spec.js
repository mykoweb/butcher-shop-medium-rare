module('Primal cuts integration');

test('Showing associated primal cuts', function () {
  visit('/animals/1');
  andThen(function () {
    var pcuts = find('.primal_cut_name');
    ok(pcuts.length == 2, "Expected two primal cuts, got: " + pcuts.length);
    equal(pcuts[0].innerText, 'Hind leg', 'Expected "Hind leg", got: ' + pcuts[0].innerText);
  });
});
