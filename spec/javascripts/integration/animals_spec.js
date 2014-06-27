module('Animals integration', {
  setup: function () {},
  teardown: function () {
    ButcherShop.reset();
  }
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
