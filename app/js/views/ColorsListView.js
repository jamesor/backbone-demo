backboneDemo.Views.ColorsListView = Backbone.View.extend({

  el: '#colorsList',

  initialize: function () {
    this.collection.on('add', this.onColorAdded, this);
    this.collection.on('remove', this.onColorRemoved, this);
  },

  render: function () {
    this.collection.each(function (color) { this.onColorAdded(color); }, this);
    backboneDemo.app.trigger('colorSelected', this.collection.at(0));
    return this;
  },

  onColorAdded: function (color) {
    var view = new backboneDemo.Views.ColorItemView({model: color}); window.color = color;
    this.$el.append(view.render().el);
  },

  onColorRemoved: function (model, collection, options) {
    backboneDemo.app.trigger('colorSelected', collection.at(0));
  }

});