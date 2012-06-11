define([], function() {

  var User = Backbone.Model.extend({
    url: function() {
      return '/users/' + this.get('id')
    },
    defaults: {
      'id': 0,
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
