backboneDemo.Models.ColorModel = Backbone.Model.extend({

  urlRoot: '/colors'

});

var colorModel = new backboneDemo.Models.ColorModel({
  title: 'Black',
  color: '#000000'
});

colorModel.save();

// Makes a "DELETE" (HTTP DELETE) request to /colors
colorModel.destroy({
  success: function (model, response) {
    // do something
  }
});
