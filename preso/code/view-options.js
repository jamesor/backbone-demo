backboneDemo.Views.ColorSampleView = Backbone.View.extend({});

// Attach to a pre-existing DOM element
var colorSampleView = new backboneDemo.Views.ColorSampleView({
  el: '#colorSample'
});

// Create a new DOM element
var colorSampleView = new backboneDemo.Views.ColorSampleView({
  id: 'colorSample',
  tagName: 'section',
  className: 'foo',
  model: new backboneDemo.Models.ColorModel(),
  collection: new backboneDemo.Collections.Colors()
});

// Would render the following HTML
&lt;section id="colorSample" class="foo"&gt;&lt;/section&gt;