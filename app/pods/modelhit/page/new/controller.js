import Ember from 'ember';

export default Ember.Controller.extend({
  selectedObject: null,
  objectSelected: function() {
    this.set('model.model.catalog', this.get('selectedObject'))
  }.observes("selectedObject")
});
