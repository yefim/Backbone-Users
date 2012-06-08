define([], function() {

  var UserView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, "render");
    },
    render: function() {
    }
  });

  var UsersView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, "render");
    },
    render: function() {
    }
  });

  return {
    UserView: UserView,
    UsersView: UsersView
  };
});
