backboneDemo.Models.ColorModel = Backbone.Model.extend({});

var colorModel = new backboneDemo.Models.ColorModel();

// Calling "set" triggers a "change" event.  In this case,
// "change:title" will be sent.
colorModel.set('title', 'Black');

// In this case, the events "change:title" and "change:color"
// will each be sent individually.
colorModel.set({title: 'Black', color: '#000000'});

// Passing {silent:true} can prevent the events from being
// triggered. {silent:false} is the default behavior for
// set(), unset() and clear().
colorModel.set({title: 'Black', color: '#000000'}, {silent:true});

colorModel.unset('title');
console.log(colorModel.attributes);
// Object { title=null, color="#000000" }

colorModel.clear();
console.log(colorModel.attributes);
// Object { }