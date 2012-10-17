backboneDemo.Models.ColorModel = Backbone.Model.extend({

  idAttribute: '_id',

  defaults: {
    title: 'Black',
    color: '#000000'
  }

});

var colorModel = new backboneDemo.Models.ColorModel({
  title: 'LightSkyBlue'
});

console.log(colorModel.attributes);
// Object { title="LightSkyBlue", color="#000000" }