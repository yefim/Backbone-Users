define([], function() {

  var User = Backbone.Model.extend({
    url: '/users'
  });

  return {
    User: User
  };
});
