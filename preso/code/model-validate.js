backboneDemo.Models.ColorModel = Backbone.Model.extend({

  validate: function (attr) {
    if (attr.title && attr.title.length < 3) {
      return 'Title must be 3 characters or more.';
    }
  }

});

var colorModel = new backboneDemo.Models.ColorModel();
colorModel.on('error', function (model, error) {
  console.log(error);
});

colorModel.set({title: 'Bl', color: '#000000'});
// "Title must be 3 characters or more."

console.log(colorModel.attributes);
// Object { }