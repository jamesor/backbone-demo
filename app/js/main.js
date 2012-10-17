window.backboneDemo = {

  app: _.extend({}, Backbone.Events),

  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function() {
    new backboneDemo.Views.ApplicationView({el: '#main'});
  }

};

$(document).ready(function(){
  backboneDemo.init();
});
