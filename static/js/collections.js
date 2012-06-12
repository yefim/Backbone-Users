define(['models'], function(Models) {

  var Users = Backbone.Collection.extend({
    model: Models.User,
    url: '/users',
    nextIndex: function() {
      return this.length ? this.last().get('id') + 1 : 1;
    }
  });

  return {
    Users: Users
  };
});
