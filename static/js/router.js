define(['models', 'views', 'collections'], function (Models, Views, Collections) {
  
  // My application's router
  var Router = Backbone.Router.extend({
    routes: {
      "" : "landing",
    },

    landing: function () {
      console.log('routing:w');
    }

  });
  
  return {
    initialize: function () {
      var router = new Router();
      Backbone.history.start();
    }
  };
});

