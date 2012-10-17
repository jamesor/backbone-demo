backboneDemo.Models.ColorModel = Backbone.Model.extend({

  idAttribute: '_id'

});

// A model with an ID is not considered a new model because it
// is assumed it was fetched from a data store.
var colorModel = new backboneDemo.Models.ColorModel({_id: 100});
console.log(colorModel.isNew());
// false

// A model without an is considered a new model.  Meaning
// it was created by the client and has not yet been "saved"
var colorModel2 = new backboneDemo.Models.ColorModel();
console.log(colorModel2.isNew());
// true
