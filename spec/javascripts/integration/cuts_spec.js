module('Cuts integration');

test('Showing associated cuts', function () {
  visit('/primal_cuts/1');
  andThen(function () {
    var cuts = find('.cut_name');
    ok(cuts.length == 2, "Expected two cuts, got: " + cuts.length);
    equal(cuts[0].innerText, 'Rib eye', 'Expected "Rib eye", got: ' + cuts[0].innerText);
  });
});

test('Renders one cut', function () {
  visit('/cuts/1');
  andThen(function () {
    var cut = find('#cut h2').text();
    var expected_result = 'We see you like the Rib eye cut!';
    equal(cut, expected_result, 'Expected: ' + expected_result + ' got: ' + cut);
  });
});

test('Visiting cut via primal cut page', function () {
  visit('/primal_cuts/1').click('table tr:last a');
  andThen(function () {
    var cut = find(".back_to_pcut").length;
    ok(cut == 1, 'Back to primal cut button not found');
  });
});

test('Should have a link back to primal cut', function () {
  visit('/primal_cuts/1').click('table tr:last a');
  andThen(function () {
    var back_link = find('a.back_to_pcut').text();
    var expected_result = "Back to primal cut";
    equal(back_link, expected_result, 'Expected: ' + expected_result + ' got: ' + back_link);
  });
});

test('Show input for new cut', function () {
  visit('/primal_cuts/1').click('#add_new_cut');
  andThen(function () {
    var name_field = find('#new_cut_name').length;
    ok(name_field == 1, 'Name field not found');
  });
});

test('Adding a new cut', function () {
  visit('/primal_cuts/1').click('#add_new_cut');
  fillIn('#new_cut_name', 'Filet mignon');
  click('#save_new_cut');
  andThen(function () {
    var name = find('.cuts_list:contains("Filet mignon")').length;
    var add_new_cut_button = find('#add_new_cut').length;

    ok(name == 1, "Name was not saved");
    ok(add_new_cut_button == 1, "Have not transitioned back to original state");
  });
});

test('Canceling creating a new cut', function () {
  visit('/primal_cuts/1').click('#add_new_cut');
  andThen(function () {
    var name_field = find('#new_cut_name').length;
    ok(name_field == 1, 'Name field not found');
    click('#cancel_new_cut');
    andThen(function () {
      var add_new_cut_button = find('#add_new_cut').length;
      ok(add_new_cut_button == 1, "Have not transitioned back to original state");
    });
  });
});

// TODO: Get the following test to work
// test('Deleting a cut', function () {
  // visit('/primal_cuts/1').click('.cuts_list li:first .delete_button');
  // andThen(function () {
    // var cuts = find('.cuts_list li').length;
    // ok(cuts == 1, "Expected 1 cut, got: " + cuts);
  // });
// });
