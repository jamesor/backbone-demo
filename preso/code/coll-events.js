backboneDemo.Views.ColorsListView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('add', this.onAddModel, this);
    this.collection.on('reset', this.onResetCollection, this);
    this.collection.on('remove', this.onRemoveModel, this);
  },

  onAddModel: function (model) {},

  onResetCollection: function (collection, options) {},

  onRemoveModel: function (model, collection, options) {
    console.log('Item removed at index ' + options.index);
  }

});