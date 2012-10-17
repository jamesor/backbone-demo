backboneDemo.Models.ColorModel = Backbone.Model.extend({});

var colorModel = new backboneDemo.Models.ColorModel();

// The client id (cid) is a unique identifier
// automatically assigned to the model when it's
// first created.
console.log(colorModel.cid);
// c11