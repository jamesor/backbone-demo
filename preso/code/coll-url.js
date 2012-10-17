backboneDemo.Collections.ColorModel = Backbone.Collection.extend({

  // Return a random collection each fetch
  url: function () {
    return '/colors/' + Math.round(Math.random() * 100);
  }

});

var colors = new backboneDemo.Colleciton.Colors();

console.log(colors.url());
// "/colors/57"

console.log(colors.url());
// "/colors/23"