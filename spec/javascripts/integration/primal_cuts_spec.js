module('Primal cuts integration');

test('Showing associated primal cuts', function () {
  visit('/animals/1');
  andThen(function () {
    var pcuts = find('.primal_cut_name');
    ok(pcuts.length == 2, "Expected two primal cuts, got: " + pcuts.length);
    equal(pcuts[0].innerText, 'Hind leg', 'Expected "Hind leg", got: ' + pcuts[0].innerText);
  });
});

test('Renders one primal cut', function () {
  visit('/primal_cuts/1');
  andThen(function () {
    var pcut = find('#primal_cut h1').text();
    var expected_result = 'Details for Primal Cut 1';
    equal(pcut, expected_result, 'Expected: ' + expected_result + ' got: ' + pcut);
  });
});

test('Visiting primal cut via animal page', function () {
  visit('/animals/1').click('ul li:last a');
  andThen(function () {
    var pcut = find("#primal_cut h1").text();
    var expected_result = "Details for Primal Cut 2";
    equal(pcut, expected_result, 'Expected: ' + expected_result + ' got: ' + pcut);
  });
});

test('Show input for new primal cut', function () {
  visit('/animals/1').click('#add_new_primal_cut');
  andThen(function () {
    var name_field = find('#new_primal_cut_name').length;
    ok(name_field == 1, 'Name field not found');
  });
});
