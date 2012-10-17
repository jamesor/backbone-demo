backboneDemo.Views.ColorSampleView = Backbone.View.extend({

  el: '#colorSample',

  template: _.template($('#color-item-template').html()),

  initialize: function () {
    this.model = new backboneDemo.Models.ColorModel();
    backboneDemo.app.on('colorSelected', this.onColorSelected, this);
  },

  remove: function () {
    backboneDemo.app.off('colorSelected', this.onColorSelected, this);
    return Backbone.View.prototype.remove.call(this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  onColorSelected: function (color) {
    this.model = color;
    this.render();
  }

});
