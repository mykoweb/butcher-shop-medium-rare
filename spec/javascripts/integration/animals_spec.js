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
