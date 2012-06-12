define([], function() {

  var User = Backbone.Model.extend({
    url: function() {
      return '/users/' + this.get('id')
    },
    defaults: function() {
      return {
        'id': 0, //this.collection.nextIndex(),
        'username': 'u_name',
        'password': 'lalala'
      }
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
