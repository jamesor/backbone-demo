backboneDemo.Views.ColorSampleView = Backbone.View.extend({

  template: _.template($('#color-item-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

&lt;script type="text/template" id="color-item-template"&gt;
  &lt;div class="chip" style="background-color: &lt;%= color %&gt;;"&gt;&lt;/div&gt;
  &lt;div class="info"&gt;
    &lt;div class="title"&gt;&lt;%= title %&gt;&lt;/div&gt;
    &lt;div class="color"&gt;&lt;%= color %&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="delBtn"&gt;Delete&lt;/button&gt;
&lt;/script&gt;
