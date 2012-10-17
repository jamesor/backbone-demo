backboneDemo.Views.ColorItemView = Backbone.View.extend({

  tagName: 'li',
  className: 'item',

  template: _.template($('#color-item-template').html()),

  events: {
    'click': 'onClick',
    'click button.delBtn': 'onDeleteClick'
  },

  initialize: function () {
    this.model.on('destroy', this.remove, this);
    backboneDemo.app.on('colorSelected', this.onColorSelected, this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  // Overriding remove() so that app event bindings can be removed.  Without
  // doing this, the view would not be garbage collected and continue to
  // handle events whether they are in the DOM or not.
  remove: function () {
    backboneDemo.app.off('colorSelected', this.onColorSelected, this);
    return Backbone.View.prototype.remove.call(this);
  },

  onClick: function (evt) {
    backboneDemo.app.trigger('colorSelected', this.model);
  },

  onDeleteClick: function (evt) {
    evt.stopPropagation();

    var color = this.model;
    this.$el.animate({height:0}, 500, function () {
      color.destroy();
    });
  },

  onColorSelected: function (color) {
    if (this.model === color) {
      $('#colorsList .item.selected').removeClass('selected');
      this.$el.addClass('selected');
    }
  }

});
