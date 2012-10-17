backboneDemo.Views.ColorSampleView = Backbone.View.extend({

  initialize: function () {
    this.model = new backboneDemo.Models.ColorModel();
    backboneDemo.app.on('colorSelected',this.onColorSelected,this);
  },
  remove: function () {
    backboneDemo.app.off('colorSelected',this.onColorSelected,this);
    // Effectively simulating "super" on this method
    return Backbone.View.prototype.remove.call(this);
  },
  render: function () {
    // ...
    return this;
  },
  onColorSelected: function (color) {
    this.model = color;
    this.render();
  }

});