backboneDemo.Models.ColorModel = Backbone.Model.extend({

  // urlRoot may also be a function
  urlRoot: '/colors'

});

var colorModel = new backboneDemo.Models.ColorModel({_id: 100});
console.log(colorModel.url());
// "/colors/100"