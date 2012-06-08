define(['models'], function(Models) {

  var Users = Backbone.Collection.extend({
    model: Models.User
  });

  return {
    Users: Users
  };
});
