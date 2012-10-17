backboneDemo.Collections.Colors = Backbone.Collection.extend({

  model: backboneDemo.Models.ColorModel

});

var colors = new backboneDemo.Collections.Colors();

colors.add([
  {title: 'Blue', color: '#0000FF'},
  {title: 'Green', color: '#00FF00'}
]);

// Adds / Removes objects in one step triggering one
// "reset" event on completion or use {silent:true}
// to prevent the event.
colors.reset([
  {title: 'Orange', color: '#FFFF00'},
  {title: 'Red', color: '#FF0000'}
]);