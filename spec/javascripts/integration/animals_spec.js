module('Animals integration', {
  setup: function () {},
  teardown: function () {}
});

test('Animals index page', function () {
  visit('/animals');
  andThen(function () {
    var header_text = find('.animals_heading').text();
    equal(header_text, "Animals Index Page", 'Expected "Animals Index Page", got: ' + header_text);
  });
});

test('Renders animals', function () {
  visit('/animals');
  andThen(function () {
    var animals_length = find('.animals_list li').length;
    equal(animals_length, 2, "Expected animals to contain 2 items, got: " + animals_length);
  });
});

test('Renders one animal', function () {
  visit('/animals/1');
  andThen(function () {
    var animal = find('#animal h1').text();
    var expected_result = 'Details for Animal 1';
    equal(animal, expected_result, 'Expected: ' + expected_result + ' got: ' + animal);
  });
});

test('Visiting animal via index page', function () {
  visit('/animals').click('ul li:last a');
  andThen(function () {
    var animal = find("#animal h1").text();
    var expected_result = "Details for Animal 2";
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
