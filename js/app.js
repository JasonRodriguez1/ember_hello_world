App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Test Item 1', 'Test Item 2', 'Test Item 3'];
  }
});
