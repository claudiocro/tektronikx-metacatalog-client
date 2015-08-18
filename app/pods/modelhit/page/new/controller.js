import Ember from 'ember';

const {computed,observer} = Ember;

export default Ember.Controller.extend({
  catalogs: [],
  selectedObject: null,
  objectSelected: observer('selectedObject', function() {
    this.set('model.catalog', this.get('selectedObject'));
  }),
  clearSelected: observer('model', function() {
    this.set('selectedObject', null);
  }),
  catalogsLoaded: computed.notEmpty('catalogs')
});
