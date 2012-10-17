// Existing DOM element to attach View to...
backboneDemo.Views.ColorSampleView = Backbone.View.extend({

  // Provide a selector to an element already in the DOM
  el: '#colorSample'

});

var colorSampleView = new backboneDemo.Views.ColorSampleView();
colorSampleView.render();