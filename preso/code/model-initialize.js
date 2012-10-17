backboneDemo.Models.ColorModel = Backbone.Model.extend({

  initialize: function () {
    console.log("I've been initialized!");
  }

});

var colorModel = new backboneDemo.Models.ColorModel();
// I've been initialized!