define(['models'], function(Models) {

  var Users = Backbone.Collection.extend({
    model: Models.User,
    url: '/users'
  });

  return {
    Users: Users
  };
});
