backboneDemo.Collections.Colors = Backbone.Collections.extend({

  // urlRoot may also be a function
  urlRoot: '/colors',

  // called whenever data is returned from a fetch
  parse: function(response) {
    return response.results;
  }
});

// Will retrieve data and from /colors and trigger a "change"
// event if the new data differs from current data.
colors.fetch({
  success: function (model, response) { ... },
  error : function (model, response) { ... }
});

// You can also send ajax data with fetch, for example to
// retrieve a specific page of data for the collection.
colors.fetch({data: {page: 3}});