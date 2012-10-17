backboneDemo.Views.ApplicationView = Backbone.View.extend({

  views: {},

  initialize: function () {
    this.collection = new backboneDemo.Collections.Colors();
    this.collection.on('reset', this.createViews, this);
    this.collection.fetch();
  },

  createViews: function () {

    var V = backboneDemo.Views
      , opts = {collection: this.collection};

    // Only create the views on the initial fetch
    this.collection.off('reset', this.createViews, this);

    // Storing references to the views in case we want
    // to do something with them later.
    this.views.colorSample = (new V.ColorSampleView()).render();
    this.views.addColor = (new V.AddColorView(opts)).render();
    this.views.colorsList = (new V.ColorsListView(opts)).render();

    this.render();
  },

  render: function () {
    this.$el.fadeIn('slow');
    return this;
  }

});
