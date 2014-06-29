module('Users integration');

/*
test('Showing associated primal cuts', function () {
  visit('/animals/1');
  andThen(function () {
    var pcuts = find('.primal_cut_name');
    ok(pcuts.length == 2, "Expected two primal cuts, got: " + pcuts.length);
    equal(pcuts[0].innerText, 'Hind leg', 'Expected "Hind leg", got: ' + pcuts[0].innerText);
  });
});
*/

test('Renders one user', function () {
  visit('/users/1');
  andThen(function () {
    var user = find('#user h2').text();
    var expected_result = 'User: Foo Bar';
    equal(user, expected_result, 'Expected: ' + expected_result + ' got: ' + user);
  });
});

/*
test('Visiting primal cut via animal page', function () {
  visit('/animals/1').click('table tr:first a');
  andThen(function () {
    var add_pcut = find("#add_new_cut").length;
    ok(add_pcut == 1, 'Add new cut button not found');
    // var expected_result = "List of Cuts for Primal Cut Hind Leg";
    // equal(pcut, expected_result, 'Expected: ' + expected_result + ' got: ' + pcut);
  });
});

test('Should have a link back to animal', function () {
  visit('/animals/1').click('table tr:last a');
  andThen(function () {
    var back_link = find('a.back_to_animal').text();
    var expected_result = "Back to animal";
    equal(back_link, expected_result, 'Expected: ' + expected_result + ' got: ' + back_link);
  });
});

test('Show input for new primal cut', function () {
  visit('/animals/1').click('#add_new_primal_cut');
  andThen(function () {
    var name_field = find('#new_primal_cut_name').length;
    ok(name_field == 1, 'Name field not found');
  });
});

test('Adding a new primal cut', function () {
  visit('/animals/1').click('#add_new_primal_cut');
  fillIn('#new_primal_cut_name', 'chest');
  click('#save_new_primal_cut');
  andThen(function () {
    var name = find('.primal_cuts_list:contains("chest")').length;
    var add_new_primal_cut_button = find('#add_new_primal_cut').length;

    ok(name == 1, "Name was not saved");
    ok(add_new_primal_cut_button == 1, "Have not transitioned back to original state");
  });
});

test('Canceling creating a new primal cut', function () {
  visit('/animals/1').click('#add_new_primal_cut');
  andThen(function () {
    var name_field = find('#new_primal_cut_name').length;
    ok(name_field == 1, 'Name field not found');
    click('#cancel_new_primal_cut');
    andThen(function () {
      var add_new_primal_cut_button = find('#add_new_primal_cut').length;
      ok(add_new_primal_cut_button == 1, "Have not transitioned back to original state");
    });
  });
});
*/

// TODO: Get the following test to work
// test('Deleting a primal cut', function () {
  // visit('/animals/1').click('.primal_cuts_list li:first .delete_button');
  // andThen(function () {
    // var primal_cuts = find('.primal_cuts_list li').length;
    // ok(primal_cuts == 1, "Expected 1 primal cut, got: " + primal_cuts);
  // });
// });
