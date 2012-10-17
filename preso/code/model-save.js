backboneDemo.Models.ColorModel = Backbone.Model.extend({

  urlRoot: '/colors'

});

var colorModel = new backboneDemo.Models.ColorModel({
  title: 'Black',
  color: '#000000'
});

// Makes a "CREATE" (HTTP POST) request to /colors
colorModel.save({
  success: function (model, response) {
    console.log(model.attributes);
    // Object { title="Black", color="#000000", _id="C01" }
  }
});

// Assumming the model was previously saved and has an ID
// Makes a "UPDATE" (HTTP PUT) request to /colors/C01
colorModel.save({title: 'Blue'});