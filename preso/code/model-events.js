backboneDemo.Views.ColorSampleView = Backbone.View.extend({

  initialize: function () {
    this.model.on('change', this.onChange, this);
    this.model.on('change:title', this.onTitleChanged, this);

    // will bubble up to any collections that contain the model
    this.model.on('destroy', this.onDestroy, this);
  },

  onChange: function (model, changedAttributes) { },

  onTitleChanged: function (model, newValue, changedAttributes) { },

  onDestroy: function (model) { }
});
