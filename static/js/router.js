define(['models', 'views', 'collections'], function (Models, Views, Collections) {
  
  // My application's router
  var Router = Backbone.Router.extend({
    routes: {
      "" : "landing",
    },

    landing: function () {
      console.log('routing:w');
      var users = new Collections.Users();
      var users_view = new Views.UsersView({el: $('#users'), collection: users});
      console.log(users_view);
    }

  });
  
  return {
    initialize: function () {
      var router = new Router();
      Backbone.history.start();
    }
  };
});

