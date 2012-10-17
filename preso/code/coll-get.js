backboneDemo.Collections.Colors = Backbone.Collection.extend({

  model: backboneDemo.Models.ColorModel

});

var color1 = new backboneDemo.Models.ColorModel()
  , color2 = {_id: '100', title: 'Green', color: '#00FF00'}
  , colors2 = new backboneDemo.Collections.Colors([color1, color2]);

console.log(colors2.get('100'));
// Object { title="Green", color="#00FF00", _id="C02" }

console.log(colors2.getByCid('c12'));
// Object { title="Green", color="#00FF00", _id="C02" }

console.log(colors2.at(1));
// Object { title="Green", color="#00FF00", _id="C02" }