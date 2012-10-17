backboneDemo.Views.ColorSampleView = Backbone.View.extend({

  initialize: function() {
    this.model = new backboneDemo.Models.ColorModel();
  },

  render: function () {
    this.$el
      .html(this.model.get('title'))
      .css('color', this.model.get('color'));

    return this;
  }
});

var colorSampleView = new backboneDemo.Views.ColorSampleView({});
$('body').append(colorSampleView.render().el);

// Would render the following HTML
&lt;div style="color:#000000"&gt;Black&lt;/div&gt;
