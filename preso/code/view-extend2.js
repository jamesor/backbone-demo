// Creating a new DOM element from scratch...
backboneDemo.Views.ColorItemView = Backbone.View.extend({

  // Provide a tag name and/or class name to apply to
  // newly created DOM element.
  tagName: 'li',
  className: 'item'

});

var colorItemView = new backboneDemo.Views.ColorItemView();
colorItemView.render();
$('body').append(colorItemView.el);