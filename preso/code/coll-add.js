backboneDemo.Collections.Colors = Backbone.Collection.extend({

  model: backboneDemo.Models.ColorModel

});

var colors = new backboneDemo.Collections.Colors();

// Adds objects in one step triggering one "add"
// event for each model or use {silent:true}
// to prevent the events.
colors.add([
  {title: 'Blue', color: '#0000FF'},
  {title: 'Green', color: '#00FF00'}
]);

colors.create({title: 'Purple', color: '#FF00FF'});

// Remove one or more models.  Triggers "remove"
// events for each unless {silent:true} is passed.
var color = colors.get(0);
colors.remove(color);

// Add() and remove() take one model or an array of models.