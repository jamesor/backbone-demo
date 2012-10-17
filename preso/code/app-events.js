backboneDemo.Views.ColorSampleView = Backbone.View.extend({

  initialize: function () {
    backboneDemo.app.on('colorSelected',this.onColorSelected,this);
  },

  // Only event bindings to this.model and this.collection will be
  // automatically unbound on remove.  Any other event binding
  // musts be removed manually by overriding this method.
  remove: function () {
    backboneDemo.app.off('colorSelected',this.onColorSelected,this);

    // If you override remove, be sure to call "super" on this
    // method to insure that the automatic bindings will also be
    // released.
    return Backbone.View.prototype.remove.call(this);
  },

  onColorSelected: function (color) { }

});