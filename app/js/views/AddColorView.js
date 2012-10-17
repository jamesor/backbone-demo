backboneDemo.Views.AddColorView = Backbone.View.extend({

  el: '#addColor',

  template: _.template($('#add-color-template').html()),

  events: {
    'click button.addBtn': 'onAddClick',
    "keypress input.title":  "onKeyPressed"
  },

  initialize: function () {
    this.model = new backboneDemo.Models.ColorModel();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    this.$colorTitle = this.$('input.title');
    this.$colorInput = this.$('input.color');
    this.$colorInput.miniColors({'readonly':true,'opacity':false});
    return this;
  },

  createNewColor: function () {
    var title = this.$colorTitle.val()
      , color = this.$colorInput.val();

    if (!title || !color) return;
    this.collection.create({title:title, color:color});
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
