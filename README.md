# Butcher Shop Sample App

This is a sample API app for a butcher shop. It's broken and incomplete. Your job is to fix it and finish it.

## Solution

### Some notes

* The Rails REST API supports the CRUD actions for the `User` and `Favorite` models. However, for simplicity the front-end Ember app was hardcoded to only perform read operations for these two models. Create, read, and delete actions can be performed for the other models, namely `Animal`, `PrimalCut`, and `Cut`.
* It was noted that users can have many favorites and each favorite has only one cut of meat. However, since Ember-data does not support the `has_one` association and since the Ember router could not handle a JSON response for favorites that was constructed using `has_one`, I changed this association to `has_many`.
* In addition to the Rspec specs, Javascript specs were written using JUnit and Teaspoon. In order to run the Teaspoon specs, you will need to have PhantomJS installed on your computer. Then, after running `bundle install`, execute the `teaspoon` command and you will see the tests running.
* You can view the Butcher Shop App at http://protected-temple-2151.herokuapp.com.

## Tasks

What we'd like you to do is the following:

### Fix the Tests

This app has a bunch of tests. Some of them are failing, and some of them are broken. You must get all tests to pass.

Some tests are also just plain missing, please try to get as close to 100% code coverage as possible, but don't obsess.

The controller specs for AnimalsController and UsersController touch the database.

Can you write some specs for at least one of the other controllers that don't touch the DB?

### Add a Model & Resources

There is a user model, but it's currently pointless. Let's make it have meaning in life by adding a new model that belongs
to users called `Favorite`. Users can have many favorites and a favorite has a cut of meat. In addition to creating the model,
you must create a set of resources for favorites that allows you to view all of a user's favorites, and create, update, and
destroy. These resources would have the following routes:

* `GET    /users/:id/favorites`
* `POST   /users/:id/favorites`
* `GET    /favorites/:id`
* `PUT    /favorites/:id`
* `DELETE /favorites/:id`

All these requests can be handled by one controller. Make sure you add tests
for your controller and model where appropriate.

Finally, the response for `GET /users/:id/favorites` should include the cut of meat, not just the `cut_id`. For example:

    {
      favorites: [
        {
          ... favorite attributes
          cut: {
            name: "whatever"
            ... cut attrs
          }
        }
      ]
    }

HINT: You can pull this nesting off with one line in a serializer

### Create DB Seeds

Finally, we'd like to add some database seeds to the `seeds.rb` file. Please make the seeds create the following:

* **Animals**:
  * Cow
    * **Primal Cuts**:
      * Chuck
      * Short Loin
      * Rib
        * **Cuts**:
          * Prime Rib
          * Ribeye
    * **Cuts**:
      * Porterhouse
      * T-bone
      * Strip
  * Pig
    * **Primal Cuts**:
      * Jowl
      * Ham
      * Loin
        * **Cuts**:
          * Loin Chop
          * Blade Roast
    * **Cuts**:
      * Babyback Rips
      * Spareribs
      * Hock

The items in bold represent the models, and the items under represent the entries to create.

## Notes

Please note that this app uses the `rails-api` gem, and is not a traditional rails app.

## Submitting Your Response

Simply fork this repo on github, then submit a pull request when you've completed the tasks.
