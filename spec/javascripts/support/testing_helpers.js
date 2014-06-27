var routesTo = function (url, route_name) {
  visit(url);
  andThen(function () {
    var current_route = ButcherShop.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, route_name, 'Expected ' + route_name + ', got: ' + current_route);
  });
};

var respondsTo = function (model, attribute, type) {
  var test_subject = ButcherShop[model].metaForProperty(attribute);
  equal(test_subject.type, type, 'Expected ' + type + " got: " + test_subject.type);
  ok(test_subject.isAttribute);
};
