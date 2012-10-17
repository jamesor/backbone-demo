backboneDemo.Models.ColorModel = Backbone.Model.extend({

  // By changing the attribute recognized as the unique
  // identifier, Backbone can work seamlessly with backend
  // systems such as MongoDB.
  idAttribute: '_id'

});

var colorModel = new backboneDemo.Models.ColorModel({_id: 100});
console.log(colorModel.id);
// 100