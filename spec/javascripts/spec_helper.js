// Teaspoon includes some support files, but you can use anything from your own support path too.
// require support/jasmine-jquery
// require support/sinon
// require support/your-support-file
//
// PhantomJS (Teaspoons default driver) doesn't have support for Function.prototype.bind, which has caused confusion. Use
// this polyfill to avoid the confusion.
//= require support/bind-poly
//
// Deferring execution
// If you're using CommonJS, RequireJS or some other asynchronous library you can defer execution. Call Teaspoon.execute()
// after everything has been loaded. Simple example of a timeout:
//
// Teaspoon.defer = true
// setTimeout(Teaspoon.execute, 1000)
//
// Matching files
// By default Teaspoon will look for files that match _spec.{js,js.coffee,.coffee}. Add a filename_spec.js file in your
// spec path and it'll be included in the default suite automatically. If you want to customize suites, check out the
// configuration in config/initializers/teaspoon.rb
//
// Manifest
// If you'd rather require your spec files manually (to control order for instance) you can disable the suite matcher in
// the configuration and use this file as a manifest.
//
// For more information: http://github.com/modeset/teaspoon
//
// You can require javascript files here. A good place to start is by requiring your application.js.
//= require application
//= require support/testing_helpers

var d = document;
d.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

ButcherShop.rootElement = "#ember-testing";
ButcherShop.setupForTesting();
ButcherShop.injectTestHelpers();

QUnit.testStart = function () {
  ButcherShop.reset();
};

// FIXTURES
ButcherShop.ApplicationAdapter = DS.FixtureAdapter;
var resetFixtures = function () {
  ButcherShop.Animal.FIXTURES = [
    { id: 1, name: 'cow', primalCuts: [1,2] },
    { id: 2, name: 'chicken' }
  ];
  ButcherShop.PrimalCut.FIXTURES = [
    { id: 1, name: 'Hind leg', animal: 1, cuts: [1,2] },
    { id: 2, name: 'Fore leg', animal: 1 }
  ];
  ButcherShop.Cut.FIXTURES = [
    { id: 1, name: 'Rib eye', animal: 1, primalCut: 1 },
    { id: 2, name: 'Pot roast', animal: 1, primalCut: 1 }
  ];
  ButcherShop.User.FIXTURES = [
    { id: 1, first_name: 'Foo', last_name: 'Bar', email: 'foo@bar.com', favorites: [1,2] }
  ];
  ButcherShop.Favorite.FIXTURES = [
    { id: 1, user: 1 },
    { id: 2, user: 1 }
  ];
};
resetFixtures();
