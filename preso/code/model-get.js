backboneDemo.Models.ColorModel = Backbone.Model.extend({});

var colorModel = new backboneDemo.Models.ColorModel({
  title: '&lt;b&gt;Black&lt;/b&gt;'
});

console.log(colorModel.get('title'));
// "&lt;b&gt;Black&lt;/b&gt;"

console.log(colorModel.escape('title'));
// "&amp;lt;b&amp;gt;Black&amp;lt;/b&amp;gt;"