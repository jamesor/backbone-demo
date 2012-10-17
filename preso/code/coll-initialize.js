backboneDemo.Collections.Colors = Backbone.Collection.extend({

  // Used to convert object literals upon model creation
  model: backboneDemo.Models.ColorModel,

  initialize: function () {
    console.log("I've been initialized!");
  }

});

var colors = new backboneDemo.Collections.Colors();
// I've been initialized!

// or with initial data models (Models or Literals)
var color1 = new backboneDemo.Models.ColorModel()
  , color2 = {title: 'Green', color: '#00FF00'}
  , colors2 = new backboneDemo.Collections.Colors([color1, color2]);

console.log(colors2.models);
// [color1, color2]