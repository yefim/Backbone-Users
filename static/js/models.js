define([], function() {

  var User = Backbone.Model.extend({
    url: '/users',
    defaults: {
      'username': 'test',
      'password': 'password'
    },
    update: function() {
      this.save();
    },
    clear: function() {
      this.destroy();
    }
  });

  return {
    User: User
  };
});
