module('Animals integration', {
  setup: function () {},
  teardown: function () { resetFixtures(); }
});

test('Animals index page', function () {
  visit('/animals');
  andThen(function () {
    var header_text = find('.animals_heading').text();
    equal(header_text, "List of Meats", 'Expected "List of Meats", got: ' + header_text);
  });
});

test('Renders animals', function () {
  visit('/animals');
  andThen(function () {
    var animals_length = find('.animals_list tr').length;
    equal(animals_length, 2, "Expected animals to contain 2 items, got: " + animals_length);
  });
});

test('Renders one animal', function () {
  visit('/animals/1');
  andThen(function () {
    var animal = find('#animal h2:first').text();
    var expected_result = 'List of Primal Cuts for cow';
    equal(animal, expected_result, 'Expected: ' + expected_result + ' got: ' + animal);
  });
});

test('Visiting animal via index page', function () {
  visit('/animals').click('table tr:last a');
  andThen(function () {
    var animal = find("#animal h2:last").text();
    var expected_result = "List of Cuts for chicken";
    equal(animal, expected_result, 'Expected: ' + expected_result + ' got: ' + animal);
  });
});

test('Show input for new animal', function () {
  visit('/animals').click('#add_new_animal');
  andThen(function () {
    var name_field = find('#new_name').length;
    ok(name_field == 1, 'Name field not found');
  });
});

test('Adding a new animal', function () {
  visit('/animals').click('#add_new_animal');
  fillIn('#new_name', 'Tyrannosaurus');
  click('#save_new_animal');
  andThen(function () {
    var name = find('.animals_list:contains("Tyrannosaurus")').length;
    var add_new_animal_button = find('#add_new_animal').length;

    ok(name == 1, "Name was not saved");
    ok(add_new_animal_button == 1, "Have not transitioned back to original state");
  });
});

test('Canceling creating of new animal', function () {
  visit('/animals').click('#add_new_animal');
  andThen(function () {
    var name_field = find('#new_name').length;
    ok(name_field == 1, 'Name field not found');
    click('#cancel_new_animal');
    andThen(function () {
      var add_new_animal_button = find('#add_new_animal').length;
      ok(add_new_animal_button == 1, "Have not transitioned back to original state");
    });
  });
});

test('Deleting an animal', function () {
  visit('/animals').click('.animals_list tr:first .delete_button');
  andThen(function () {
    var animals = find('table tr').length;
    ok(animals == 1, "Expected 1 animal, got: " + animals);
  });
});
