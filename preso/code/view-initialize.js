backboneDemo.Views.AddColorView = Backbone.View.extend({

  el: '#addColor',

  initialize: function () {
    this.model = new backboneDemo.Models.ColorModel();
  }

});