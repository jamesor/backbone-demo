backboneDemo.Collections.Colors = Backbone.Collection.extend({});

var colors = new backboneDemo.Collection.Colors([
  {title:'Red', color:'#FF0000'},
  {title:'Green', color:'#00FF00'}
]);

// Return a copy of the collection's models for JSON stringification
console.log(JSON.stringify(colors));
// [{title="Red",color="#FF0000"},{title="Green",color="#00FF00"}]