backboneDemo.Views.AddColorView = Backbone.View.extend({

  events: {
    'click button.addBtn': 'onAddClick',
    "keypress input.title":  "onKeyPressed"
  },

  createNewColor: function () {
    // ...
  },

  onAddClick: function (evt) {
    this.createNewColor();
  },

  onKeyPressed: function (evt) {
    var ENTER_KEY = 13;
    if (evt.keyCode != ENTER_KEY) return;
    this.createNewColor();
  }

});
