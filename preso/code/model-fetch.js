backboneDemo.Models.ColorModel = Backbone.Model.extend({

  // urlRoot may also be a function
  urlRoot: '/colors'

});

var colorModel = new backboneDemo.Models.ColorModel({_id: 100});
console.log(colorModel.url());
// "/colors/100"

// Will retrieve data and from /colors/100 and trigger a "change"
// event if the new data differs from current data.
colorModel.fetch({
  success: function (model, response) {
    // do something
  },
  error : function (model, response) {
    // do something
  }
});
