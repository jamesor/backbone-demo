backboneDemo.Models.ColorModel = Backbone.Model.extend({

  idAttribute: '_id',

  defaults: {
    title: 'Black',
    color: '#000000'
  },

  set: function (attrs, options) {
    if (attrs.color) {
      attrs.color = attrs.color.toUpperCase();
    }
    Backbone.Model.prototype.set.call(this, attrs, options);
  }

});
