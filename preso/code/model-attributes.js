backboneDemo.Models.ColorModel = Backbone.Model.extend({

  idAttribute: '_id'

});

var colorModel = new backboneDemo.Models.ColorModel({
  _id: 'C01',
  title: 'LightSkyBlue',
  color: '#87CEFA'
});

console.log(colorModel.attributes);
// Object { title="LightSkyBlue", color="#87CEFA", _id="C01" }