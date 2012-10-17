backboneDemo.Models.ColorModel = Backbone.Model.extend({});

var colorModel = new backboneDemo.Models.ColorModel({
  title: 'Black',
  color: '#000000'
});

// Return a copy of the model's attributes for JSON stringification
console.log(JSON.stringify(colorModel));
// { title="Black", color="#000000" }