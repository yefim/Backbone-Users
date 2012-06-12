define(['models'], function(Models) {

  var UserView = Backbone.View.extend({
    tagName: 'tr',
    events: {
      'click button.delete': 'remove'
    },
    initialize: function() {
      _.bindAll(this, 'render', 'unrender','remove');
      this.model.bind('change', this.render);
      this.model.bind('remove', this.unrender);
    },
    render: function() {
      $(this.el).html("<td>" + this.model.get('id') +  "</td><td>" + this.model.get('username') + "</td><td>" + this.model.get('password') + "</td><td><button class='delete'>Remove</button></td>");
      return this;
    },
    unrender: function() {
      $(this.el).remove();
    },
    remove: function() {
      console.log('Removing model');
      this.model.destroy();
    }
  });

  var UsersView = Backbone.View.extend({
    events: {'click button#add' : 'addUser'},
    initialize: function() {
      var self = this;
      _.bindAll(this, "render", "addUser", "appendUser");
      this.collection.fetch({
        success: function() {
          self.collection.bind('add', self.appendUser);
          self.render();
        }
      });
      this.counter = 0;
    },
    render: function() {
      var self = this;
      $(this.el).append('<button id="add">Add</button>');
      $(this.el).append('<table></table>');
      _.each(this.collection.models, function(m) {
        self.appendUser(m);
      }, this);
      return this;
    },
    addUser: function() {
      console.log('Adding a User');
      var self = this;
      var u = new Models.User();
      u.set({
        id: this.collection.nextIndex(),
        username: u.defaults().username + this.counter
      });
      console.log(u);
      this.counter++;
      console.log(this.collection.nextIndex());
      this.collection.create(u, {
        success: function(model, response) {
          u.set({id: response});
        }
      });
    },
    appendUser: function(u) {
      var u_view = new UserView({model: u});
      $('table', this.el).append(u_view.render().el);
    }
  });

  return {
    UserView: UserView,
    UsersView: UsersView
  };
});
