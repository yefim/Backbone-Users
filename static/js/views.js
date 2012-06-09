define([], function() {

  var UserView = Backbone.View.extend({
    tagName: 'li',
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('destroy', this.remove, this);
    },
    render: function() {
      $(this.el).append("username: " + this.model.get('username') + " password: " + this.model.get('password'));
      return this;
    },
    clear: function() {
      this.model.clear();
    }
  });

  var UsersView = Backbone.View.extend({
    initialize: function() {
      _.bindAll(this, "render");
      //this.collection.bind('all', this.render(), this);
      this.collection.fetch();
    },
    render: function() {
      this.setElement('#users');
      _.each(this.collection.models, function(m) {
        m.render({model: m});
      });
      return this;
    }
  });

  return {
    UserView: UserView,
    UsersView: UsersView
  };
});
