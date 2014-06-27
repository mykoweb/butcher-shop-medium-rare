module('Cuts integration');

test('Showing associated cuts', function () {
  visit('/primal_cuts/1');
  andThen(function () {
    var cuts = find('.cut_name');
    ok(cuts.length == 2, "Expected two cuts, got: " + cuts.length);
    equal(cuts[0].innerText, 'Rib eye', 'Expected "Rib eye", got: ' + cuts[0].innerText);
  });
});
